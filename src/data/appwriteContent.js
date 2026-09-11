import { appwriteConfig, ID, storage, tables } from '../lib/appwrite'
import { defaultBoard, defaultConsultants, defaultPosts } from './branchContent'

const imageUrl = (value) => {
  if (!value) return ''
  if (String(value).startsWith('http')) return value
  if (!appwriteConfig.mediaBucketId) return ''
  return storage.getFileView({ bucketId: appwriteConfig.mediaBucketId, fileId: value }).toString()
}

const mapPerson = (row) => ({ id: row.$id, ...row, image: imageUrl(row.image || row.imageFileId) })
const mapPost = (row) => ({ id: row.$id, ...row, copy: row.copy || row.summary || '', date: row.date || row.publishedAt || '' })

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
    board: board.length ? board : defaultBoard,
    consultants: consultants.length ? consultants : defaultConsultants,
    posts: posts.length ? posts : defaultPosts,
  }
}

async function saveRows(tableId, rows, kind) {
  const existing = await listRows(tableId, kind === 'post' ? mapPost : mapPerson)
  const incomingIds = new Set(rows.map((row) => row.id))
  await Promise.all(existing.filter((row) => !incomingIds.has(row.id)).map((row) => tables.deleteRow({ databaseId: appwriteConfig.databaseId, tableId, rowId: row.id })))

  return Promise.all(rows.map(({ id, $id, $createdAt, $updatedAt, $permissions, $databaseId, $tableId, image, copy, date, ...rest }) => {
    const rowId = id || ID.unique()
    const data = kind === 'post'
      ? { title: rest.title, summary: copy, published: 'true', publishedAt: date || new Date().toISOString() }
      : { ...rest, imageFileId: image || '' }
    const params = { databaseId: appwriteConfig.databaseId, tableId, rowId, data }
    return existing.some((row) => row.id === id) ? tables.updateRow(params) : tables.createRow(params)
  }))
}

export async function saveRemoteContent(content) {
  await Promise.all([
    saveRows(appwriteConfig.boardTableId, content.board, 'person'),
    saveRows(appwriteConfig.consultantsTableId, content.consultants, 'person'),
    saveRows(appwriteConfig.postsTableId, content.posts, 'post'),
  ])
  return loadRemoteContent()
}

export async function uploadImage(file) {
  const response = await storage.createFile({ bucketId: appwriteConfig.mediaBucketId, fileId: ID.unique(), file })
  return storage.getFileView({ bucketId: appwriteConfig.mediaBucketId, fileId: response.$id }).toString()
}
