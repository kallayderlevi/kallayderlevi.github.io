const tones = {
  clients: 'from-[#5d9f35]/90 via-[#73b744]/50 to-slate-700/45',
  partners: 'from-[#73b744]/85 via-[#5d9f35]/45 to-slate-800/55',
  students: 'from-[#5d9f35]/80 via-[#73b744]/35 to-slate-700/60',
}

export default function PageBanner({ eyebrow, title, copy, tone = 'clients' }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-[#73b744] text-white shadow-glow">
      <img src="/brand/budapest-banner.jpeg" alt="Budapest skyline" className="absolute inset-0 h-full w-full object-contain object-center bg-white sm:object-cover banner-pan" />
      <div className={`absolute inset-0 bg-gradient-to-r ${tones[tone] || tones.clients}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/15 to-transparent" />
      <div className="relative grid min-h-[28rem] gap-10 overflow-hidden px-4 py-8 sm:min-h-[24rem] sm:px-12 sm:py-14 lg:min-h-[27rem] lg:grid-cols-[1fr_0.38fr] lg:items-center">
        <div className="relative max-w-2xl rounded-[1.5rem] border border-white/20 bg-slate-950/30 p-5 shadow-lg backdrop-blur-[2px] sm:p-7 banner-rise">
          <p className="text-xs font-semibold uppercase section-kicker text-white/90">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight drop-shadow-md sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white drop-shadow-sm">{copy}</p>
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
