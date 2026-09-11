import SocialLinks from '../components/SocialLinks'

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Get in touch.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          All general enquiries can be sent to budapest@180dc.org.
        </p>

        <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
          <p><span className="block text-slate-500">Email</span> budapest@180dc.org</p>
          <p><span className="block text-slate-500">Location</span> Budapest, Hungary</p>
          <div>
            <span className="block text-slate-500">Find us online</span>
            <div className="mt-3">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}