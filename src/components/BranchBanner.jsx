export default function BranchBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#73b744] text-white">
      <img src="/brand/budapest-banner.jpeg" alt="Budapest skyline with 180 Degrees Consulting branding" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5d9f35]/75 via-[#73b744]/20 to-transparent" />
      <div className="absolute inset-0 bg-white/10 mix-blend-soft-light banner-sweep" />

      <div className="relative mx-auto flex min-h-[20rem] max-w-7xl items-center justify-between gap-8 px-6 py-10 lg:min-h-[25rem] lg:px-8">
        <div className="max-w-xl banner-rise">
          <p className="text-xs font-semibold uppercase section-kicker text-white/90">Budapest branch</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight drop-shadow-sm sm:text-5xl">Turning ideas into impact.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
            Student-led consulting for organisations creating positive social change.
          </p>
        </div>

        <div className="hidden shrink-0 sm:block" aria-hidden="true" />
      </div>
    </section>
  )
}
