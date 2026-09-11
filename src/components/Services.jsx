import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'

const routes = [
  {
    title: 'Clients',
    description: 'For NGOs, non-profits, social enterprises, and mission-led companies that want to work with us.',
    to: '/clients',
    accent: 'emerald',
  },
  {
    title: 'Partners',
    description: 'For universities, consultancies, sponsors, and collaborators who want to support the chapter.',
    to: '/partners',
    accent: 'slate',
  },
  {
    title: 'Students',
    description: 'For applicants who want to join the consulting team and send in a CV with their application.',
    to: '/students',
    accent: 'emerald',
  },
]

export default function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('pathsEyebrow')}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {t('pathsTitle')}
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          {t('pathsCopy')}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {routes.map((route) => (
          <article
            key={route.title}
            className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-slate-300 sm:p-10"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{route.title}</p>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.65rem] uppercase text-slate-500 transition group-hover:border-emerald-600/20 group-hover:text-emerald-700">
                Track
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">{route.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{route.description}</p>
            <div className="mt-8 h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />
            <div className="mt-8">
              <Link
                to={route.to}
                className="inline-flex min-w-40 items-center justify-center rounded-full bg-emerald-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-emerald-700"
              >
                {t('view')} {route.title === 'Clients' ? t('clients') : route.title === 'Partners' ? t('partners') : t('students')}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}