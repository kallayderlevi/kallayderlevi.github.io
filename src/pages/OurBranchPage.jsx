import { useBranchContent } from '../hooks/useBranchContent'
import { useLanguage } from '../i18n'

export default function OurBranchPage() {
  const { board, consultants } = useBranchContent()
  const { t } = useLanguage()
  const photoClass = (member, fallback) => member.image
    ? `${member.imageFit === 'contain' ? 'object-contain bg-slate-100' : 'object-cover'} ${member.imagePosition === 'top' ? 'object-top' : member.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'} ${fallback}`
    : fallback

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('ourBranchLabel')}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {t('meetBudapest')}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t('branchIntro')}
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-8">
          <img src="/brand/globe-green.png" alt={t('globeAlt')} className="h-20 w-20 object-contain" />
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {t('branchDisciplines')}
          </p>
          <a
            href="mailto:budapest@180dc.org"
            className="mt-5 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            budapest@180dc.org
          </a>
        </div>
      </div>

      <div className="mt-16 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('executiveCommittee')}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{t('peopleBehind')}</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {board.map((member) => (
          <article
            key={member.role}
            className="brand-card-hover group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-glow"
          >
            <div className="flex aspect-[4/3] items-center justify-center bg-slate-950 sm:aspect-[5/4]">
              <img
                src={member.image || '/brand/globe-green.png'}
                alt={member.image ? member.name : ''}
                className={photoClass(member, member.image ? 'h-full w-full' : 'h-24 w-24 object-contain opacity-90 transition duration-300 group-hover:scale-105')}
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase section-kicker text-[#5d9f35]">{member.role}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{member.background}</p>
              <a href={`mailto:${member.email}`} className="mt-4 block text-sm font-medium text-slate-500 hover:text-emerald-700">
                {member.email}
              </a>
              {member.showLinkedin && member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} title="LinkedIn" className="brand-hover mt-3 inline-flex rounded-full bg-[#73b744] px-3 py-1.5 text-xs font-bold text-white">
                  LinkedIn
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 border-t border-slate-200 pt-12">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('valueEyebrow')}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900">{t('valueTitle')}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="brand-card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-glow">
            <p className="text-3xl font-semibold text-[#73b744]">01</p>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{t('clarifyTitle')}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t('clarifyCopy')}</p>
          </article>
          <article className="brand-card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-glow">
            <p className="text-3xl font-semibold text-[#73b744]">02</p>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{t('insightTitle')}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t('insightCopy')}</p>
          </article>
          <article className="brand-card-hover rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-glow">
            <p className="text-3xl font-semibold text-[#73b744]">03</p>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{t('nextStepTitle')}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t('nextStepCopy')}</p>
          </article>
        </div>
      </section>

      {consultants.length > 0 && (
        <div className="mt-20">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('consultantsLabel')}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{t('communityHeading')}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consultants.map((member) => (
              <article key={member.id} className="brand-card-hover overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-glow">
                <div className="flex aspect-[4/3] items-center justify-center bg-slate-950">
                  <img src={member.image || '/brand/globe-green.png'} alt={member.image ? member.name : ''} className={photoClass(member, member.image ? 'h-full w-full' : 'h-20 w-20 object-contain')} />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase section-kicker text-emerald-700">{member.role}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{member.background}</p>
                  <a href={`mailto:${member.email}`} className="mt-4 block text-sm text-slate-500 hover:text-emerald-700">{member.email}</a>
                  {member.showLinkedin && member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} title="LinkedIn" className="brand-hover mt-3 inline-flex rounded-full bg-[#73b744] px-3 py-1.5 text-xs font-bold text-white">LinkedIn</a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
