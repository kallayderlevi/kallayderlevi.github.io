export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/15 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase section-kicker text-emerald-700">
            Budapest branch
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Social impact consulting for Budapest, backed by the global 180DC network.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            We connect top university students with local NGOs, non-profits, social enterprises, and mission-led
            companies that need practical, affordable consulting support. The chapter is new locally, but the
            standards come from a global organisation with decades of momentum.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            A new chapter, built with the tone of an established consulting team.
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/clients"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              For Clients
            </a>
            <a
              href="/students"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Join as Student
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Non-profit strategy</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Student development</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Global 180DC network</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow sm:p-8">
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#73b744] p-4 text-white">
            <img
              src="/brand/logo-full-white.png"
              alt="180 Degrees Consulting Budapest"
              className="h-20 w-auto max-w-[220px] shrink-0 object-contain object-left mix-blend-screen"
            />
            <div>
              <p className="text-xs font-semibold uppercase section-kicker text-white">One network</p>
              <p className="mt-1 text-sm leading-6 text-white/90">
                Local perspective, global people, and practical work that moves missions forward.
              </p>
            </div>
          </div>

          <dl className="grid gap-4 py-6 sm:grid-cols-2">
            {[
              ['40+', 'Countries operating in'],
              ['190+', 'Branches worldwide'],
              ['7,800+', 'Consulting projects completed'],
              ['60,000+', 'Social impact leaders trained'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <dt className="text-sm font-medium text-slate-500">{label}</dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  )
}