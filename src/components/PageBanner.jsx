const tones = {
  clients: 'from-[#5d9f35]/90 via-[#73b744]/50 to-slate-700/45',
  partners: 'from-[#73b744]/85 via-[#5d9f35]/45 to-slate-800/55',
  students: 'from-[#5d9f35]/80 via-[#73b744]/35 to-slate-700/60',
}

export default function PageBanner({ eyebrow, title, copy, tone = 'clients' }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#73b744] text-white shadow-glow">
      <img src="/brand/budapest-banner.jpeg" alt="Budapest skyline" className="absolute inset-0 h-full w-full object-cover object-center banner-pan" />
      <div className={`absolute inset-0 bg-gradient-to-r ${tones[tone] || tones.clients}`} />
      <div className="absolute inset-0 bg-slate-950/10 mix-blend-multiply" />
      <div className="relative grid min-h-[20rem] gap-10 overflow-hidden px-8 py-10 sm:px-12 sm:py-14 lg:min-h-[24rem] lg:grid-cols-[1fr_0.38fr] lg:items-center">
        <div className="relative banner-rise">
          <p className="text-xs font-semibold uppercase section-kicker text-white/90">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight drop-shadow-sm sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">{copy}</p>
        </div>
        <div className="hidden justify-end lg:flex">
          <img
            src="/brand/logo-full-white.png"
            alt="180 Degrees Consulting Budapest"
            className="h-48 w-auto max-w-[280px] object-contain mix-blend-screen opacity-95 banner-logo-float"
          />
        </div>
      </div>
    </div>
  )
}
