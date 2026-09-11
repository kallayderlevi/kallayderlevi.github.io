import { useEffect, useState } from 'react'
import { getContent } from '../data/branchContent'
import { loadRemoteContent } from '../data/appwriteContent'
import { appwriteEnabled } from '../lib/appwrite'

export function useBranchContent() {
  const [content, setContent] = useState(getContent)

  useEffect(() => {
    const refresh = () => setContent(getContent())
    if (appwriteEnabled) {
      loadRemoteContent().then(setContent).catch(() => refresh())
    }
    window.addEventListener('180dc-content-updated', refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener('180dc-content-updated', refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  return content
}
