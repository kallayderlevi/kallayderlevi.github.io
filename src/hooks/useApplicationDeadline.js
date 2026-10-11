import { useEffect, useState } from 'react'
import { applicationDeadline } from '../data/application'
import { useBranchContent } from './useBranchContent'

function getStatus(recruitment) {
  const configuredDeadline = recruitment?.deadline ? new Date(`${recruitment.deadline}T23:59:59+02:00`) : applicationDeadline
  const remaining = configuredDeadline.getTime() - Date.now()
  if (recruitment?.open === false || remaining <= 0) return { open: false, days: 0, hours: 0, minutes: 0, seconds: 0 }
  const totalSeconds = Math.floor(remaining / 1000)
  return {
    open: true,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export default function useApplicationDeadline() {
  const { recruitment } = useBranchContent()
  const [, setTick] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setTick((value) => value + 1), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return getStatus(recruitment)
}
