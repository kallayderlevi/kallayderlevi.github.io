export default function BranchBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#73b744] text-white">
      <img src="/brand/budapest-banner.jpeg" alt="Budapest skyline with 180 Degrees Consulting branding" className="relative block aspect-[3/1] w-full object-contain object-center sm:absolute sm:inset-0 sm:aspect-auto sm:h-full sm:object-cover" />
      <div className="absolute inset-x-0 top-0 h-[9rem] bg-gradient-to-b from-slate-950/25 to-transparent sm:inset-0 sm:h-auto sm:bg-gradient-to-r sm:from-[#5d9f35]/85 sm:via-[#73b744]/35 sm:to-transparent" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-slate-950/35 via-transparent to-transparent sm:block" />
      <div className="absolute inset-0 hidden bg-white/10 mix-blend-soft-light sm:block banner-sweep" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-end gap-8 px-4 pb-6 pt-5 sm:min-h-[24rem] sm:flex-row sm:items-center sm:px-6 sm:py-10 lg:min-h-[30rem] lg:px-8">
        <div className="max-w-xl rounded-[1.5rem] border border-white/20 bg-slate-950/35 p-5 shadow-lg backdrop-blur-[2px] sm:bg-slate-950/25 sm:p-7 banner-rise">
          <p className="text-xs font-semibold uppercase section-kicker text-white/90">Budapest branch</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight drop-shadow-md sm:text-5xl">Turning ideas into impact.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white drop-shadow-sm sm:text-lg">
            Student-led consulting for organisations creating positive social change.
          </p>
        </div>

        <div className="hidden shrink-0 sm:block" aria-hidden="true" />
      </div>
    </section>
  )
}
