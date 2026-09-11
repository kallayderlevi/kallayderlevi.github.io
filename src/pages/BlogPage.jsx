import { Link } from 'react-router-dom'
import { useBranchContent } from '../hooks/useBranchContent'

export default function BlogPage() {
  const { posts } = useBranchContent()

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-[2.5rem] bg-[#73b744] text-white shadow-glow">
        <div className="relative grid gap-8 overflow-hidden px-8 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_0.45fr] lg:items-center">
          <div className="absolute -right-24 -top-40 h-96 w-96 rounded-full border-[38px] border-white/15" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase section-kicker text-white/80">180DC Budapest journal</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Ideas, updates, and impact.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Follow the people, projects, and conversations shaping our student-led consulting branch.
            </p>
          </div>
          <div className="relative hidden justify-end lg:flex">
            <img src="/brand/globe-green.png" alt="" className="h-48 w-48 object-contain brightness-0 invert opacity-90" />
          </div>
        </div>
      </div>

      <div className="mt-14 flex items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Latest posts</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">From the Budapest branch.</h2>
        </div>
        <Link to="/contact" className="hidden text-sm font-semibold text-[#5d9f35] hover:text-[#73b744] sm:block">
          Contact the branch
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <article key={post.id || post.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744]">
            <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-500">
              <span>Update 0{index + 1}</span>
              <span className="rounded-full bg-[#edf7e8] px-3 py-1 text-[0.65rem] tracking-[0.18em] text-[#73b744]">180DC Budapest</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">{post.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{post.copy}</p>
            <div className="mt-7 h-1 w-12 rounded-full bg-[#73b744] transition-all duration-300 group-hover:w-24" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{post.date || 'Budapest branch update'}</p>
          </article>
        ))}
      </div>

      {posts.length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-slate-600">New updates will appear here soon.</p>}
    </section>
  )
}
