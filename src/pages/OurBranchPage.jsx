import { useBranchContent } from '../hooks/useBranchContent'

export default function OurBranchPage() {
  const { board, consultants } = useBranchContent()
  const photoClass = (member, fallback) => member.image
    ? `${member.imageFit === 'contain' ? 'object-contain bg-slate-100' : 'object-cover'} ${member.imagePosition === 'top' ? 'object-top' : member.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'} ${fallback}`
    : fallback

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Our Branch</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Meet 180DC Budapest.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A student-led consulting branch connecting Budapest&apos;s university talent with organisations creating
            positive social impact.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-8">
          <img src="/brand/globe-green.png" alt="180 Degrees Consulting globe mark" className="h-20 w-20 object-contain" />
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Our branch brings together people from business, engineering, law, social sciences, and beyond.
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
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Executive Committee</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">The people behind the branch.</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {board.map((member) => (
          <article
            key={member.role}
            className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-glow transition duration-300 hover:-translate-y-1 hover:border-slate-300"
          >
            <div className="flex h-48 items-center justify-center bg-slate-950">
              <img
                src={member.image || '/brand/globe-green.png'}
                alt={member.image ? member.name : ''}
                className={photoClass(member, member.image ? 'h-full w-full' : 'h-24 w-24 object-contain opacity-90 transition duration-300 group-hover:scale-105')}
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase section-kicker text-emerald-700">{member.role}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{member.background}</p>
              <a href={`mailto:${member.email}`} className="mt-4 block text-sm font-medium text-slate-500 hover:text-emerald-700">
                {member.email}
              </a>
            </div>
          </article>
        ))}
      </div>

      {consultants.length > 0 && (
        <div className="mt-20">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Consultants</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Our consulting community.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consultants.map((member) => (
              <article key={member.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-glow">
                <div className="flex h-40 items-center justify-center bg-slate-950">
                  <img src={member.image || '/brand/globe-green.png'} alt={member.image ? member.name : ''} className={photoClass(member, member.image ? 'h-full w-full' : 'h-20 w-20 object-contain')} />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase section-kicker text-emerald-700">{member.role}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{member.background}</p>
                  <a href={`mailto:${member.email}`} className="mt-4 block text-sm text-slate-500 hover:text-emerald-700">{member.email}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
