export default function BranchBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#73b744] text-white">
      <div className="absolute -left-24 -top-32 h-72 w-72 rounded-full border-[34px] border-white/15 sm:h-96 sm:w-96" />
      <div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full border-[42px] border-white/15" />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.1)_45%,transparent_70%)] banner-sweep" />

      <div className="relative mx-auto flex min-h-[20rem] max-w-7xl items-center justify-between gap-8 px-6 py-10 lg:min-h-[25rem] lg:px-8">
        <div className="max-w-xl banner-rise">
          <p className="text-xs font-semibold uppercase section-kicker text-white/80">180 Degrees Consulting</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Turning ideas into impact in Budapest.</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/85 sm:text-lg">
            A local student-led branch with a global point of view.
          </p>
        </div>

        <div className="hidden shrink-0 items-center justify-center sm:flex">
          <div className="banner-orbit relative flex h-48 w-48 items-center justify-center rounded-full border border-white/25 bg-white/10 p-5 backdrop-blur-sm lg:h-64 lg:w-64">
            <div className="absolute inset-3 rounded-full border border-white/20" />
            <img src="/brand/globe-green.png" alt="180 Degrees Consulting globe mark" className="relative h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
