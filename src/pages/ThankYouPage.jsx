import { useLanguage } from '../i18n'

export default function ThankYouPage() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8 lg:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5d9f35]">{t('applicationReceived')}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t('thankYouTitle')}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        {t('thankYouCopy')}
      </p>
      <a href="/" className="brand-hover mt-8 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white">
        {t('backHome')}
      </a>
    </section>
  )
}
