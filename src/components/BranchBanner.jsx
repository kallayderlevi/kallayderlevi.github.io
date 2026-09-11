export default function BranchBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-white">
      <img src="/brand/budapest-banner.jpeg" alt="Budapest skyline with 180 Degrees Consulting branding" className="absolute inset-0 h-full w-full object-contain object-center sm:object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5d9f35]/85 via-[#73b744]/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-white/10 mix-blend-soft-light banner-sweep" />

      <div className="relative mx-auto flex min-h-[28rem] max-w-7xl items-center justify-between gap-8 px-4 py-10 sm:min-h-[24rem] sm:px-6 lg:min-h-[30rem] lg:px-8">
        <div className="max-w-xl rounded-[1.5rem] border border-white/20 bg-slate-950/25 p-5 shadow-lg backdrop-blur-[2px] sm:p-7 banner-rise">
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
