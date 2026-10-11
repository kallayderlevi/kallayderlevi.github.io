import { Link } from 'react-router-dom'
import useApplicationDeadline from '../hooks/useApplicationDeadline'
import { useLanguage } from '../i18n'

export default function ApplicationDeadline() {
  const status = useApplicationDeadline()
  const { t } = useLanguage()

  if (!status.open) {
    return (
      <div className="mt-3 rounded-2xl bg-slate-200 px-4 py-3 text-slate-600">
        <p className="text-sm font-semibold">{t('deadlineClosed')}</p>
        <Link to="/students" className="brand-link-hover mt-2 inline-flex rounded-md px-1 py-0.5 text-sm font-semibold text-[#5d9f35]">
          {t('applyNow')}
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-3 rounded-2xl border border-[#73b744]/25 bg-[#edf7e8] p-4 text-[#5d9f35]" role="status">
      <p className="text-xs font-semibold uppercase tracking-[0.18em]">{t('deadlineOpen')}</p>
      <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2 font-mono tabular-nums">
        <span className="text-3xl font-bold tracking-tight sm:text-4xl">{String(status.days).padStart(2, '0')}<small className="ml-1 text-xs font-semibold uppercase tracking-normal">{t('deadlineDays')}</small></span>
        <span className="text-3xl font-bold tracking-tight sm:text-4xl">{String(status.hours).padStart(2, '0')}<small className="ml-1 text-xs font-semibold uppercase tracking-normal">{t('deadlineHours')}</small></span>
        <span className="text-3xl font-bold tracking-tight sm:text-4xl">{String(status.minutes).padStart(2, '0')}<small className="ml-1 text-xs font-semibold uppercase tracking-normal">{t('deadlineMinutes')}</small></span>
        <span className="text-3xl font-bold tracking-tight sm:text-4xl">{String(status.seconds).padStart(2, '0')}<small className="ml-1 text-xs font-semibold uppercase tracking-normal">{t('deadlineSeconds')}</small></span>
      </div>
      <Link to="/students" className="brand-hover mt-4 inline-flex rounded-full bg-[#73b744] px-5 py-2.5 text-sm font-semibold text-white">
        {t('applyNow')}
      </Link>
    </div>
  )
}
