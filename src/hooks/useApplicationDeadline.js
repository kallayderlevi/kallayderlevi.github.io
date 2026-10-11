import { useEffect, useState } from 'react'
import { applicationDeadline } from '../data/application'
import { useBranchContent } from './useBranchContent'

function getStatus(recruitment) {
  const configuredDeadline = recruitment?.deadline ? new Date(`${recruitment.deadline}T23:59:59+02:00`) : applicationDeadline
  const remaining = configuredDeadline.getTime() - Date.now()
  if (recruitment?.open === false || remaining <= 0) return { open: false, days: 0, hours: 0 }
  return {
    open: true,
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
  }
}

export default function useApplicationDeadline() {
  const { recruitment } = useBranchContent()
  const [, setTick] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setTick((value) => value + 1), 60000)
    return () => window.clearInterval(timer)
  }, [])

  return getStatus(recruitment)
}
