import { useLanguage } from '../i18n'
import PageBanner from '../components/PageBanner'
import ApplicationDeadline from '../components/ApplicationDeadline'
import useApplicationDeadline from '../hooks/useApplicationDeadline'

const mondayFormUrl = 'https://forms.monday.com/forms/b3b6fc266e81fb6915c72754d4e53ce3?r=euc1'

const timeline = [
  {
    labelKey: 'applicationStage', stepsKey: 'applicationSteps',
    number: '01',
  },
  {
    labelKey: 'onboardingStage', stepsKey: 'onboardingSteps',
    number: '02',
  },
  {
    labelKey: 'projectStage', stepsKey: 'projectSteps',
    number: '03',
  },
  {
    labelKey: 'futureStage', stepsKey: 'futureSteps',
    number: '04',
  },
]

const benefits = [
  {
    titleKey: 'impactTitle', copyKey: 'socialImpactBenefit',
  },
  {
    titleKey: 'consultingTitle', copyKey: 'consultingBenefit',
  },
  {
    titleKey: 'trainingTitle', copyKey: 'trainingBenefit',
  },
  {
    titleKey: 'communityTitle', copyKey: 'communityBenefit',
  },
]

export default function StudentsPage() {
  const { t } = useLanguage()
  const { open: applicationsOpen } = useApplicationDeadline()

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 pb-32 lg:px-8 lg:py-24">
      <PageBanner
        eyebrow="Students"
        title={t('studentBanner')}
        copy={t('studentBannerCopy')}
        tone="students"
      />

      <div className="mt-16 max-w-3xl">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('timelineTitle')}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t('studentJourney')}</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {t('studentJourneyCopy')}
        </p>
      </div>

      <div className="relative mt-10 grid gap-5 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-[#73b744]/35 lg:block" />
        {timeline.map((stage, index) => (
          <article
            key={stage.labelKey}
            className="service-reveal group relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744] sm:p-7"
            style={{ animationDelay: `${index * 110}ms` }}
          >
            <div className="relative flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#73b744] text-sm font-bold text-white ring-8 ring-white">
                {stage.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{t(stage.labelKey)}</h3>
            </div>
            <ol className="mt-7 space-y-4">
              {t(stage.stepsKey).map((step, stepIndex) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-[#73b744]">{stepIndex + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('studentBenefitsTitle')}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t('studentBenefitsHeading')}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article key={benefit.titleKey} className="group rounded-[2rem] border border-slate-200 bg-[#edf7e8] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#dff0d4] sm:p-8">
              <span className="text-4xl font-semibold text-[#73b744]">0{index + 1}</span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{t(benefit.titleKey)}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{t(benefit.copyKey)}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0 self-start rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('selectionTitle')}</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">{t('selectionHeading')}</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {t('selectionCopy')}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 border-t-2 border-[#73b744] pt-5 text-sm leading-6 text-slate-600">
            <span className="rounded-full bg-[#edf7e8] px-3 py-2">{t('cvReview')}</span>
            <span className="rounded-full bg-[#edf7e8] px-3 py-2">{t('assessment')}</span>
            <span className="rounded-full bg-[#edf7e8] px-3 py-2">{t('finalInterview')}</span>
          </div>
        </div>

        <div id="student-application" className="min-w-0 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('applyNow')}</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">{t('sendCv')}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Complete your application through our secure Monday application form. You can upload your CV and provide your motivation there.
          </p>
          <ApplicationDeadline showApply={false} />
          <a href={mondayFormUrl} className="brand-hover mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white">{t('submitApplication')}</a>
        </div>
      </div>
      {applicationsOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[#73b744]/20 bg-white/90 px-4 pt-2 backdrop-blur-md transition-[opacity,transform] duration-150 md:hidden"
        >
          <a href={mondayFormUrl} className="brand-hover mx-auto flex w-full max-w-7xl items-center justify-center rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(93,159,53,0.3)]">
            {t('mobileApply')}
          </a>
        </div>
      )}
    </section>
  )
}
