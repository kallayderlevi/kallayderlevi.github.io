import PageBanner from '../components/PageBanner'
import HowDidYouHear from '../components/HowDidYouHear'
import { useLanguage } from '../i18n'
import EmailLink from '../components/EmailLink'

const partnerFormats = [
  {
    number: '01',
    titleKey: 'workshopTitle', copyKey: 'workshopCopy',
  },
  {
    number: '02',
    titleKey: 'brandTitle', copyKey: 'brandCopy',
  },
  {
    number: '03',
    titleKey: 'collaborationTitle', copyKey: 'collaborationCopy',
  },
]

const benefits = [
  {
    number: '1',
    titleKey: 'exposureTitle', copyKey: 'exposureCopy',
  },
  {
    number: '2',
    titleKey: 'talentTitle', copyKey: 'talentCopy',
  },
  {
    number: '3',
    titleKey: 'impactTitle', copyKey: 'impactCopy',
  },
]

export default function PartnersPage() {
  const { t } = useLanguage()
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <PageBanner
        eyebrow={t('partners')}
        title={t('partnerBanner')}
        copy={t('partnerBannerCopy')}
        tone="partners"
      />

      <div className="mt-16 max-w-3xl">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('partnersWhatTitle')}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {t('partnersTitle')}
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {t('partnersCopy')}
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {partnerFormats.map((format, index) => (
          <article
            key={format.titleKey}
            className="service-reveal group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744] sm:p-8"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7e8] text-sm font-bold text-[#73b744]">
              {format.number}
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">{t(format.titleKey)}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{t(format.copyKey)}</p>
            <div className="mt-7 h-1 w-12 rounded-full bg-[#73b744] transition-all duration-300 group-hover:w-24" />
          </article>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('benefitsTitle')}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t('benefitsHeading')}</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.titleKey} className="rounded-[2rem] border border-[#73b744]/20 bg-[#73b744] p-7 text-white shadow-glow sm:p-8">
              <span className="text-5xl font-semibold text-white/70">{benefit.number}</span>
              <h3 className="mt-6 text-xl font-semibold">{t(benefit.titleKey)}</h3>
              <p className="mt-4 text-sm leading-7 text-white/90">{t(benefit.copyKey)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-[#edf7e8] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-[#5d9f35]">{t('startPartnership')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{t('partnershipHeading')}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t('partnershipCopy')}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3"><span className="text-sm font-semibold text-slate-700">budapest@180dc.org</span><EmailLink /></div>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="180DC Budapest partnership enquiry" />
          <h2 className="text-2xl font-semibold text-slate-900">{t('collaborationForm')}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">{t('partnershipFormCopy')}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">{t('nameLabel')}<input name="name" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
            <label className="grid gap-2 text-sm text-slate-700">{t('organisationLabel')}<input name="organisation" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          </div>
          <label className="mt-4 grid gap-2 text-sm text-slate-700">{t('emailLabel')}<input name="_replyto" type="email" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          <HowDidYouHear />
          <label className="mt-4 grid gap-2 text-sm text-slate-700">{t('messageLabel')}<textarea name="message" rows="6" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          <button className="brand-hover mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white">{t('sendPartnership')}</button>
        </form>
      </div>
    </section>
  )
}
