import PageBanner from '../components/PageBanner'
import { useLanguage } from '../i18n'

const serviceGroups = [
  {
    titleKey: 'strategyTitle', itemsKey: 'strategyItems',
  },
  {
    titleKey: 'financeTitle', itemsKey: 'financeItems',
  },
  {
    titleKey: 'marketingTitle', itemsKey: 'marketingItems',
  },
  {
    titleKey: 'operationsTitle', itemsKey: 'operationsItems',
  },
]

export default function ClientsPage() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <PageBanner
        eyebrow={t('clientServicesEyebrow')}
        title={t('clientBanner')}
        copy={t('clientBannerCopy')}
        tone="clients"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('clientsLabel')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {t('clientsTitle')}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t('clientsCopy')}
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-8">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('expectTitle')}</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {t('expectCopy')}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceGroups.map((group, index) => (
          <article
            key={group.titleKey}
            className="service-reveal group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744]"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-900">{t(group.titleKey)}</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf7e8] text-sm font-semibold text-[#73b744]">
                0{index + 1}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {t(group.itemsKey).map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#73b744]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('projectsTitle')}</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">{t('projectsHeading')}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t('projectsCopy')}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['01', t('scopeTitle'), t('scopeCopy')],
              ['02', t('analyseTitle'), t('analyseCopy')],
              ['03', t('deliverTitle'), t('deliverCopy')],
            ].map(([number, title, copy]) => (
              <div key={number} className="border-t-2 border-[#73b744] pt-4">
                <p className="text-xs font-semibold text-[#73b744]">{number}</p>
                <p className="mt-2 font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#73b744] p-8 text-white shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-white/80">{t('communicationTitle')}</p>
          <h2 className="mt-3 text-2xl font-semibold">{t('communicationHeading')}</h2>
          <p className="mt-4 text-base leading-7 text-white/90">
            {t('communicationCopy')}
          </p>
          <p className="mt-6 text-sm leading-7 text-white/80">
            {t('communicationNote')}
          </p>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="180DC Budapest client inquiry" />
          <h2 className="text-2xl font-semibold text-slate-900">{t('inquiryTitle')}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {t('inquiryCopy')}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">
              {t('nameLabel')}
              <input name="name" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              {t('organisationLabel')}
              <input name="organisation" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm text-slate-700">
            {t('emailLabel')}
            <input name="_replyto" type="email" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
          </label>

          <label className="mt-4 grid gap-2 text-sm text-slate-700">
            {t('messageLabel')}
            <textarea name="message" rows="6" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
          </label>

          <button className="mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d9f35]">
            {t('sendBudapest')}
          </button>
        </form>
      </div>
    </section>
  )
}