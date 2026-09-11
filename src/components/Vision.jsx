import { useLanguage } from '../i18n'

export default function Vision() {
  return <VisionContent />
}

function VisionContent() {
  const { t } = useLanguage()
  return (
    <section id="vision" className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">{t('vision')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t('visionTitle')}</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            {t('visionCopy')}
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The name 180 Degrees reflects the transformation we aim to create: turning good organisations into great
            organisations, challenges into opportunities, and ideas into reality.
          </p>
          <a
            href="/our-branch"
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            {t('meetBranch')}
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-glow">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#73b744]/30 blur-3xl" />
          <div className="relative aspect-video overflow-hidden rounded-[1.4rem] bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/zkgZ5LiRiZA"
              title="180 Degrees Consulting vision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="flex items-center gap-3 px-3 py-4 text-white">
            <img src="/brand/globe-green.png" alt="" className="h-10 w-10 object-contain" />
            <p className="text-sm text-slate-300">Discover the 180DC vision and global community.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
