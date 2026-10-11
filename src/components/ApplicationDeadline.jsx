import useApplicationDeadline from '../hooks/useApplicationDeadline'

export default function ApplicationDeadline() {
  const status = useApplicationDeadline()

  if (!status.open) {
    return <p className="mt-3 rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold text-slate-600">Applications are currently closed.</p>
  }

  return (
    <p className="mt-3 rounded-xl bg-[#edf7e8] px-3 py-2 text-sm font-semibold text-[#5d9f35]" role="status">
      Applications close October 31, 2026. {status.days} days and {status.hours} hours remaining.
    </p>
  )
}
