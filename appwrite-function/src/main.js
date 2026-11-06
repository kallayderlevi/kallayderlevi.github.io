/* global process, Buffer */

const mondayEndpoint = 'https://api.monday.com/v2'
const mondayFileEndpoint = 'https://api.monday.com/v2/file'

const requiredVariables = [
  'MONDAY_API_TOKEN',
  'MONDAY_BOARD_ID',
  'MONDAY_GROUP_APPLICATIONS_ID',
  'MONDAY_COLUMN_EMAIL',
  'MONDAY_COLUMN_YEARS_OF_STUDY',
  'MONDAY_COLUMN_DEGREE',
  'MONDAY_COLUMN_MOTIVATION',
  'MONDAY_COLUMN_CV',
]

function getConfig() {
  const missing = requiredVariables.filter((key) => !process.env[key])
  if (missing.length) throw new Error(`Missing Function variables: ${missing.join(', ')}`)
  return process.env
}

function textValue(value) {
  return { text: String(value || '') }
}

function emailValue(value) {
  return { email: String(value || ''), text: String(value || '') }
}

function dropdownValue(value) {
  return { labels: value ? [String(value)] : [] }
}

async function mondayRequest(query, variables, token) {
  const response = await fetch(mondayEndpoint, {
    method: 'POST',
    headers: { Authorization: token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })
  const body = await response.json()
  if (!response.ok || body.errors?.length) throw new Error(body.errors?.[0]?.message || 'Monday API request failed')
  return body.data
}

async function createMondayItem(data, config) {
  const columnValues = {
    [config.MONDAY_COLUMN_EMAIL]: emailValue(data.email),
    [config.MONDAY_COLUMN_YEARS_OF_STUDY]: dropdownValue(data.yearsOfStudy),
    [config.MONDAY_COLUMN_DEGREE]: dropdownValue(data.degree),
    [config.MONDAY_COLUMN_MOTIVATION]: textValue(data.motivation),
  }
  if (config.MONDAY_COLUMN_HEARD_ABOUT_US) columnValues[config.MONDAY_COLUMN_HEARD_ABOUT_US] = textValue(data.heardAboutUs)
  const query = `mutation ($boardId: ID!, $groupId: String!, $itemName: String!, $columnValues: JSON!) {
    create_item(board_id: $boardId, group_id: $groupId, item_name: $itemName, column_values: $columnValues) { id }
  }`
  const result = await mondayRequest(query, {
    boardId: config.MONDAY_BOARD_ID,
    groupId: config.MONDAY_GROUP_APPLICATIONS_ID,
    itemName: data.name,
    columnValues: JSON.stringify(columnValues),
  }, config.MONDAY_API_TOKEN)
  return result.create_item.id
}

async function uploadCv(itemId, data, config) {
  if (!data.cv?.content) return
  const fileBytes = Buffer.from(data.cv.content, 'base64')
  const form = new FormData()
  const query = `mutation ($file: File!, $itemId: ID!, $columnId: String!) {
    add_file_to_column(item_id: $itemId, column_id: $columnId, file: $file) { id }
  }`
  form.append('query', query)
  form.append('variables', JSON.stringify({ file: null, itemId, columnId: config.MONDAY_COLUMN_CV }))
  form.append('map', JSON.stringify({ file: ['variables.file'] }))
  form.append('file', new Blob([fileBytes], { type: data.cv.type || 'application/octet-stream' }), data.cv.name || 'application-file')

  const response = await fetch(mondayFileEndpoint, {
    method: 'POST',
    headers: { Authorization: config.MONDAY_API_TOKEN },
    body: form,
  })
  const body = await response.json()
  if (!response.ok || body.errors?.length) throw new Error(body.errors?.[0]?.message || 'Monday CV upload failed')
}

export default async ({ req, res, log }) => {
  try {
    const config = getConfig()
    const data = typeof req.bodyJson === 'object' && req.bodyJson ? req.bodyJson : JSON.parse(req.body || '{}')
    if (!data.name || !data.email) return res.json({ error: 'Name and email are required.' }, 400)

    const itemId = await createMondayItem(data, config)
    await uploadCv(itemId, data, config)
    log(`Created Monday recruitment item ${itemId}`)
    return res.json({ ok: true, itemId })
  } catch (error) {
    log(error.message)
    return res.json({ error: error.message }, 500)
  }
}
