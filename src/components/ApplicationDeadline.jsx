import useApplicationDeadline from '../hooks/useApplicationDeadline'
import { useLanguage } from '../i18n'

export default function ApplicationDeadline() {
  const status = useApplicationDeadline()
  const { t } = useLanguage()

  if (!status.open) {
    return <p className="mt-3 rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold text-slate-600">{t('deadlineClosed')}</p>
  }

  return (
    <p className="mt-3 rounded-xl bg-[#edf7e8] px-3 py-2 text-sm font-semibold text-[#5d9f35]" role="status">
      {t('deadlineOpen')} {status.days} {t('deadlineDays')} {t('deadlineAnd')} {status.hours} {t('deadlineHours')} {t('deadlineRemaining')}.
    </p>
  )
}
