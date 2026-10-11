import { useBranchContent } from '../hooks/useBranchContent'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'

export default function Blog() {
  const { posts } = useBranchContent()
  const { t } = useLanguage()

  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{t('blogEyebrow')}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{t('latest')}</h2>
        </div>
        <p className="hidden max-w-xl text-sm leading-6 text-slate-600 md:block">
          {t('blogIntro')}
        </p>
        <Link to="/blog" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          {t('viewAll')}
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="group rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
              <span className="rounded-full border border-emerald-600/15 bg-emerald-50 px-3 py-1 text-[0.65rem] tracking-[0.18em] text-emerald-700">
                {t(post.category === 'Community' ? 'categoryCommunity' : post.category === 'Recruitment' ? 'categoryRecruitment' : post.category === 'Impact' ? 'categoryImpact' : 'categoryUpdates')}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{t(post.id === 'launch' ? 'postLaunchTitle' : post.id === 'recruitment' ? 'postRecruitmentTitle' : post.id === 'ngo-consulting' ? 'postNgoTitle' : post.title)}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t(post.id === 'launch' ? 'postLaunchCopy' : post.id === 'recruitment' ? 'postRecruitmentCopy' : post.id === 'ngo-consulting' ? 'postNgoCopy' : post.copy)}</p>
            <div className="mt-6 h-px w-full bg-slate-200" />
            <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800">
              {t('readMore')}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}