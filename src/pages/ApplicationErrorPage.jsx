import { useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n'

export default function ApplicationErrorPage() {
  const { t } = useLanguage()
  const { state } = useLocation()

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8 lg:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600">{t('applicationErrorLabel')}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t('applicationErrorTitle')}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{t('applicationErrorCopy')}</p>
      {state?.message && <p className="mx-auto mt-5 max-w-2xl rounded-xl bg-red-50 px-4 py-3 text-left text-sm text-red-700">{state.message}</p>}
      <a
        href="mailto:budapest@180dc.org?subject=Student%20application%20submission%20problem"
        className="mt-8 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d9f35]"
      >
        budapest@180dc.org
      </a>
      <div>
        <a href="/students" className="mt-5 inline-flex text-sm font-semibold text-[#5d9f35] hover:underline">{t('backToApplication')}</a>
      </div>
    </section>
  )
}
