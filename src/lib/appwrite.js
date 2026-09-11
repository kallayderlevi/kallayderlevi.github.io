import { Account, Client, ID, Storage, TablesDB } from 'appwrite'

const config = {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  boardTableId: import.meta.env.VITE_APPWRITE_BOARD_TABLE_ID,
  consultantsTableId: import.meta.env.VITE_APPWRITE_CONSULTANTS_TABLE_ID,
  postsTableId: import.meta.env.VITE_APPWRITE_POSTS_TABLE_ID,
  mediaBucketId: import.meta.env.VITE_APPWRITE_MEDIA_BUCKET_ID,
}

export const appwriteEnabled = Boolean(config.endpoint && config.projectId && config.databaseId)

const client = new Client()
if (appwriteEnabled) {
  client.setEndpoint(config.endpoint).setProject(config.projectId)
}

export const account = new Account(client)
export const tables = new TablesDB(client)
export const storage = new Storage(client)
export { ID }
export { config as appwriteConfig }
