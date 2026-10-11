import { useBranchContent } from '../hooks/useBranchContent'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'

export default function Blog() {
  const { posts } = useBranchContent()
  const { t } = useLanguage()
  const postText = (post, field) => {
    const defaultPosts = {
      launch: { title: '180DC Officially Launches in Budapest', copy: 'A milestone update introducing the new chapter, its vision, and the first opportunities for students and partners.', titleKey: 'postLaunchTitle', copyKey: 'postLaunchCopy' },
      recruitment: { title: 'Spring Recruitment Now Open', copy: 'We are looking for ambitious students who want consulting experience, mentorship, and a real seat at the table.', titleKey: 'postRecruitmentTitle', copyKey: 'postRecruitmentCopy' },
      'ngo-consulting': { title: 'What It’s Like Consulting for an NGO', copy: 'A short preview of the kinds of challenges our teams will tackle and the skills students will build along the way.', titleKey: 'postNgoTitle', copyKey: 'postNgoCopy' },
    }
    const fallback = defaultPosts[post.id]
    return fallback && post[field] === fallback[field] ? t(fallback[`${field}Key`]) : post[field]
  }

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
          <article key={post.title} className="brand-card-hover group rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
              <span className="rounded-full border border-emerald-600/15 bg-emerald-50 px-3 py-1 text-[0.65rem] tracking-[0.18em] text-emerald-700">
                {t(post.category === 'Community' ? 'categoryCommunity' : post.category === 'Recruitment' ? 'categoryRecruitment' : post.category === 'Impact' ? 'categoryImpact' : 'categoryUpdates')}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{postText(post, 'title')}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{postText(post, 'copy')}</p>
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