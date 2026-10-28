import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { submitApplicationForm } from '../lib/formSubmission'
import PageBanner from '../components/PageBanner'
import ApplicationConsent from '../components/ApplicationConsent'
import ApplicationDeadline from '../components/ApplicationDeadline'
import HowDidYouHear from '../components/HowDidYouHear'
import useApplicationDeadline from '../hooks/useApplicationDeadline'
import { useLanguage } from '../i18n'

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
  const applicationFormRef = useRef(null)
  const [mobileApplyVisibility, setMobileApplyVisibility] = useState(1)
  const [applicationStatus, setApplicationStatus] = useState('idle')
  const [isDraggingFile, setIsDraggingFile] = useState(false)
  const cvInputRef = useRef(null)

  useEffect(() => {
    const updateVisibility = () => {
      const form = applicationFormRef.current
      if (!form) return
      const formTop = form.getBoundingClientRect().top
      const fadeStart = window.innerHeight * 0.85
      const fadeEnd = window.innerHeight * 0.35
      const progress = Math.min(1, Math.max(0, (fadeStart - formTop) / (fadeStart - fadeEnd)))
      setMobileApplyVisibility(1 - progress)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)
    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  const scrollToApplication = (event) => {
    event.preventDefault()
    applicationFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const submitApplication = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    try {
      const result = await submitApplicationForm(form)
      if (!result.handled) {
        HTMLFormElement.prototype.submit.call(form)
        return
      }
      setApplicationStatus('success')
      form.reset()
    } catch {
      HTMLFormElement.prototype.submit.call(form)
    }
  }

  const setCvFile = (file) => {
    if (!file || !cvInputRef.current) return
    if (file.size > 10 * 1024 * 1024) {
      setApplicationStatus('Please upload a PDF, DOC, or DOCX file up to 10 MB.')
      return
    }
    const transfer = new DataTransfer()
    transfer.items.add(file)
    cvInputRef.current.files = transfer.files
    setApplicationStatus('idle')
  }

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
        <div className="min-w-0 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-10">
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

        <form
          id="student-application"
          style={{ scrollMarginTop: '6rem' }}
          ref={applicationFormRef}
          onSubmit={submitApplication}
          className="min-w-0 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="180DC Budapest student application" />
          <input type="hidden" name="_next" value="https://www.180dcbudapest.org/thank-you" />
          <input type="hidden" name="_autoresponse" value="Thank you for applying to 180 Degrees Consulting Budapest. We received your application and will contact you by email with the next steps." />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="hidden" />
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('applyNow')}</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">{t('sendCv')}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {t('applicationCopy')}
          </p>
          <ApplicationDeadline showApply={false} />
          {applicationStatus === 'success' && <p className="mt-4 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-sm font-semibold text-green-800" role="status">Application received. We will contact you by email.</p>}
          {applicationStatus !== 'idle' && applicationStatus !== 'success' && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700" role="alert">{applicationStatus}</p>}

          <fieldset disabled={!applicationsOpen} className="contents">
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">{t('nameLabel')}<input name="name" required autoComplete="name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
            <label className="grid gap-2 text-sm text-slate-700">Email<input name="email" type="email" required autoComplete="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">{t('universityLabel')}<input name="university" required autoComplete="organization" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
              <label className={`grid gap-2 rounded-2xl border border-dashed p-3 text-sm text-slate-700 transition ${isDraggingFile ? 'border-[#5d9f35] bg-[#dff0d4]' : 'border-[#73b744]/50 bg-[#edf7e8]'}`} onDragOver={(event) => { event.preventDefault(); setIsDraggingFile(true) }} onDragLeave={() => setIsDraggingFile(false)} onDrop={(event) => { event.preventDefault(); setIsDraggingFile(false); setCvFile(event.dataTransfer.files[0]) }}>{t('cvUpload')}<span className="text-xs text-slate-500">PDF, DOC, DOCX · max. 10 MB</span><input ref={cvInputRef} name="cv" type="file" accept=".pdf,.doc,.docx" required onChange={(event) => setCvFile(event.target.files[0])} className="mt-1 rounded-xl border border-white bg-white px-3 py-3 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-[#73b744] file:px-3 file:py-2 file:font-semibold file:text-white" /></label>
          </div>
          <HowDidYouHear />
          <label className="mt-4 grid gap-2 text-sm text-slate-700">{t('motivationLabel')}<textarea name="message" rows="5" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          <ApplicationConsent />
          <button className="brand-hover mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white">{t('submitApplication')}</button>
          </fieldset>
        </form>
      </div>
      {applicationsOpen && (
        <div
          aria-hidden={mobileApplyVisibility < 0.05}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[#73b744]/20 bg-white/90 px-4 pt-2 backdrop-blur-md transition-[opacity,transform] duration-150 md:hidden"
          style={{
            opacity: mobileApplyVisibility,
            transform: `translateY(${(1 - mobileApplyVisibility) * 100}%)`,
            pointerEvents: mobileApplyVisibility < 0.05 ? 'none' : 'auto',
          }}
        >
          <Link to="#student-application" onClick={scrollToApplication} className="brand-hover mx-auto flex w-full max-w-7xl items-center justify-center rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(93,159,53,0.3)]">
            {t('mobileApply')}
          </Link>
        </div>
      )}
    </section>
  )
}
