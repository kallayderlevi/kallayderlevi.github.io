import PageBanner from '../components/PageBanner'

const partnerFormats = [
  {
    number: '01',
    title: 'Workshops and networking events',
    copy: 'We organise and facilitate collaborative events that bring together industry professionals, students, and alumni. These events create space for knowledge sharing, skill development, and valuable connections.',
  },
  {
    number: '02',
    title: 'Brand promotion and recruiting support',
    copy: 'Through targeted marketing and strategic outreach, we strengthen your visibility among motivated students. We can also promote selected job openings, events, and recruitment opportunities.',
  },
  {
    number: '03',
    title: 'Collaboration on consulting projects',
    copy: 'Partner with us on real consulting projects where talented students develop innovative solutions with mentorship and feedback. You gain fresh perspectives while supporting future leaders.',
  },
]

const benefits = [
  {
    number: '1',
    title: 'Enhanced brand exposure',
    copy: "Amplify your brand's visibility through our communication channels, gain recognition among students, and position your company as an attractive employer for top-tier talent.",
  },
  {
    number: '2',
    title: 'Exclusive access to exceptional talent',
    copy: 'Connect with a select pool of high-achieving students and alumni who bring analytical ability, consulting experience, and a commitment to meaningful change.',
  },
  {
    number: '3',
    title: 'Social impact',
    copy: 'Demonstrate your commitment to social responsibility and sustainability by supporting pro bono consultancy for non-profits and social enterprises.',
  },
]

export default function PartnersPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <PageBanner
        eyebrow="Partners"
        title="Build the next generation of social impact leaders with us."
        copy="Collaborate with 180DC Budapest through events, talent access, mentoring, and real consulting work."
        tone="partners"
      />

      <div className="mt-16 max-w-3xl">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">What we do with our partners</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Flexible collaboration with a clear social return.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Whether you want to share expertise, reach exceptional students, or contribute to meaningful projects, we
          shape the partnership around your organisation&apos;s goals.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {partnerFormats.map((format, index) => (
          <article
            key={format.title}
            className="service-reveal group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744] sm:p-8"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#edf7e8] text-sm font-bold text-[#73b744]">
              {format.number}
            </span>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">{format.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{format.copy}</p>
            <div className="mt-7 h-1 w-12 rounded-full bg-[#73b744] transition-all duration-300 group-hover:w-24" />
          </article>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Your benefits</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Why partner with 180DC?</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.number} className="rounded-[2rem] border border-[#73b744]/20 bg-[#73b744] p-7 text-white shadow-glow sm:p-8">
              <span className="text-5xl font-semibold text-white/70">{benefit.number}</span>
              <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/90">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-[#edf7e8] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-[#5d9f35]">Start a partnership</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">Let&apos;s make the connection useful.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Tell us whether you are interested in an event, recruitment support, mentorship, or a consulting project.
          </p>
          <p className="mt-6 text-sm font-semibold text-slate-700">budapest@180dc.org</p>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="180DC Budapest partnership enquiry" />
          <h2 className="text-2xl font-semibold text-slate-900">Start a collaboration</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">Your message will be emailed to budapest@180dc.org.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">Name<input name="name" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
            <label className="grid gap-2 text-sm text-slate-700">Organisation<input name="organisation" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          </div>
          <label className="mt-4 grid gap-2 text-sm text-slate-700">Email<input name="_replyto" type="email" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          <label className="mt-4 grid gap-2 text-sm text-slate-700">Message<textarea name="message" rows="6" required className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          <button className="mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d9f35]">Send Partnership Note</button>
        </form>
      </div>
    </section>
  )
}
