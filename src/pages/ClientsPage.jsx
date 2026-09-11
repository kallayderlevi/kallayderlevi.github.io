const serviceGroups = [
  {
    title: 'Strategy',
    items: ['Competitive analysis / benchmarking', 'Market entry', 'Organisational structure'],
  },
  {
    title: 'Finance',
    items: ['Modelling / forecasting', 'Cost-effectiveness', 'Accounting'],
  },
  {
    title: 'Marketing',
    items: ['Branding / advertising', 'Marketing strategy', 'Market research'],
  },
  {
    title: 'Operations',
    items: ['Expansion and structure', 'Operational efficiency', 'Process improvement'],
  },
]

export default function ClientsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-[2.5rem] bg-[#73b744] text-white shadow-glow">
        <div className="relative grid gap-10 overflow-hidden px-8 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_0.6fr] lg:items-center">
          <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full border-[36px] border-white/15" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase section-kicker text-white/80">Client services</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Practical consulting for organisations creating a better future.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              We work with organisations of every size, from social enterprises with under five employees to
              international non-profits with more than 1,000 people.
            </p>
          </div>
          <div className="relative hidden justify-end lg:flex">
            <img src="/brand/globe-green.png" alt="" className="h-52 w-52 object-contain brightness-0 invert opacity-90" />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Clients</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Data-backed recommendations shaped around your mission.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help clients overcome pressing business challenges and act on their biggest opportunities through
            rigorous analysis, practical recommendations, and a clear connection to their top-line strategy.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-8">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">What to expect</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            A focused conversation, a scoped project brief, and a team built around the problem you actually need to
            solve.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceGroups.map((group, index) => (
          <article
            key={group.title}
            className="service-reveal group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744]"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf7e8] text-sm font-semibold text-[#73b744]">
                0{index + 1}
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {group.items.map((item) => (
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
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">How projects work</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">A focused team around the problem.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Project teams typically consist of one Senior Advisor, one to two Project Managers, and five to six
            Business Analysts. That structure keeps senior perspective close to the work while giving students real
            responsibility.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['01', 'Scope', 'Define the challenge and success measures.'],
              ['02', 'Analyse', 'Build evidence through research and structured thinking.'],
              ['03', 'Deliver', 'Turn findings into practical recommendations.'],
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
          <p className="text-xs font-semibold uppercase section-kicker text-white/80">Communication</p>
          <h2 className="mt-3 text-2xl font-semibold">Clear communication, built around your team.</h2>
          <p className="mt-4 text-base leading-7 text-white/90">
            Each Project Manager is trained to communicate effectively and at the client&apos;s convenience, creating
            a rhythm that keeps the project transparent and useful from first conversation to final recommendation.
          </p>
          <p className="mt-6 text-sm leading-7 text-white/80">
            We welcome conversations with organisations working in community development, education, inclusion, and
            social impact.
          </p>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="180DC Budapest client inquiry" />
          <h2 className="text-2xl font-semibold text-slate-900">Send an inquiry</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Your message will be emailed to budapest@180dc.org.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">
              Name
              <input name="name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              Organisation
              <input name="organisation" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm text-slate-700">
            Email
            <input name="email" type="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
          </label>

          <label className="mt-4 grid gap-2 text-sm text-slate-700">
            Message
            <textarea name="message" rows="6" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" />
          </label>

          <button className="mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d9f35]">
            Send to Budapest
          </button>
        </form>
      </div>
    </section>
  )
}