import SocialLinks from '../components/SocialLinks'
import { useLanguage } from '../i18n'

export default function ContactPage() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{t('contact')}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{t('getInTouch')}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{t('contactCopy')}</p>

        <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
          <p><span className="block text-slate-500">{t('email')}</span> budapest@180dc.org</p>
          <p><span className="block text-slate-500">{t('location')}</span> Budapest, Hungary</p>
          <div>
            <span className="block text-sm font-semibold text-slate-900">{t('findUs')}</span>
            <span className="block text-slate-500">{t('socialCopy')}</span>
            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}