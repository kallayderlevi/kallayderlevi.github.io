import { appwriteConfig, ID, storage, tables } from '../lib/appwrite'
import { defaultBoard, defaultConsultants, defaultPosts, defaultRecruitment, getContent } from './branchContent'

const imageUrl = (value) => {
  if (!value) return ''
  if (String(value).startsWith('http')) return value
  if (!appwriteConfig.mediaBucketId) return ''
  return storage.getFileView({ bucketId: appwriteConfig.mediaBucketId, fileId: value }).toString()
}

const mapPerson = (row) => ({ id: row.$id, imageFit: 'cover', imagePosition: 'center', sortOrder: '0', ...row, image: imageUrl(row.image || row.imageFileId) })
const mapPost = (row) => ({ id: row.$id, ...row, category: row.category || 'Updates', copy: row.copy || row.summary || '', date: row.date || row.publishedAt || '' })

async function listRows(tableId, mapper) {
  const response = await tables.listRows({ databaseId: appwriteConfig.databaseId, tableId })
  return response.rows.map(mapper)
}

export async function loadRemoteContent() {
  const [board, consultants, posts] = await Promise.all([
    listRows(appwriteConfig.boardTableId, mapPerson),
    listRows(appwriteConfig.consultantsTableId, mapPerson),
    listRows(appwriteConfig.postsTableId, mapPost),
  ])
  return {
    board: (board.length ? board : defaultBoard).sort((a, b) => Number(a.sortOrder || 0) - Number(b.sortOrder || 0)),
    consultants: (consultants.length ? consultants : defaultConsultants).sort((a, b) => Number(a.sortOrder || 0) - Number(b.sortOrder || 0)),
    posts: posts.length ? posts : defaultPosts,
    recruitment: getContent().recruitment || defaultRecruitment,
  }
}

async function saveRows(tableId, rows, kind) {
  const existing = await listRows(tableId, kind === 'post' ? mapPost : mapPerson)
  const operationLabel = kind === 'post' ? 'blog post' : kind === 'board' ? 'board member' : 'consultant'

  return Promise.all(rows.map((row) => {
    const { id, image, imageFit, imagePosition, sortOrder, copy, date, ...rest } = row
    delete rest.$id
    delete rest.$createdAt
    delete rest.$updatedAt
    delete rest.$permissions
    delete rest.$databaseId
    delete rest.$tableId
    const rowId = id || ID.unique()
    const data = kind === 'post'
      ? { title: rest.title, category: rest.category || 'Updates', summary: copy, published: 'true', publishedAt: date || new Date().toISOString() }
      : { ...rest, imageFileId: image || '', imageFit: imageFit || 'cover', imagePosition: imagePosition || 'center', sortOrder: String(sortOrder || 0) }
    const params = { databaseId: appwriteConfig.databaseId, tableId, rowId, data }
    const operation = existing.some((row) => row.id === id) ? 'update' : 'create'
    const request = operation === 'update' ? tables.updateRow(params) : tables.createRow(params)
    return request.catch((error) => {
      throw new Error(`Could not ${operation} ${operationLabel} in Appwrite table ${tableId}: ${error.message}`)
    })
  }))
}

export async function saveRemoteContent(content) {
  const localContent = getContent()
  localContent.recruitment = content.recruitment || defaultRecruitment
  localStorage.setItem('180dc-budapest-content', JSON.stringify(localContent))
  await Promise.all([
    saveRows(appwriteConfig.boardTableId, content.board, 'board'),
    saveRows(appwriteConfig.consultantsTableId, content.consultants, 'consultant'),
    saveRows(appwriteConfig.postsTableId, content.posts, 'post'),
  ])
  return loadRemoteContent()
}

export async function uploadImage(file) {
  const response = await storage.createFile({ bucketId: appwriteConfig.mediaBucketId, fileId: ID.unique(), file })
  return storage.getFileView({ bucketId: appwriteConfig.mediaBucketId, fileId: response.$id }).toString()
}
