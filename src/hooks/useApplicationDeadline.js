import { useEffect, useState } from 'react'
import { applicationDeadline } from '../data/application'

function getStatus() {
  const remaining = applicationDeadline.getTime() - Date.now()
  if (remaining <= 0) return { open: false, days: 0, hours: 0 }
  return {
    open: true,
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
  }
}

export default function useApplicationDeadline() {
  const [status, setStatus] = useState(getStatus)

  useEffect(() => {
    const timer = window.setInterval(() => setStatus(getStatus()), 60000)
    return () => window.clearInterval(timer)
  }, [])

  return status
}
