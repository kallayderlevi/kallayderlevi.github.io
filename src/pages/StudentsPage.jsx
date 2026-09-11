const timeline = [
  {
    label: 'Application',
    number: '01',
    steps: ['Optional information event', 'Online application', 'Interview conversation', 'Personal feedback'],
  },
  {
    label: 'Onboarding',
    number: '02',
    steps: ['Kick-off and project matching', 'Team-building weekend', 'Consulting and research workshops'],
  },
  {
    label: 'Project',
    number: '03',
    steps: ['Client or research topic introduction', 'Project execution with your team', 'Midterm and final presentation'],
  },
  {
    label: 'Future steps',
    number: '04',
    steps: ['Operational roles: Senior Consultant or Team Manager', 'Strategic roles across partnerships, legal and finance, people, communications, consulting, and digital operations', 'A connected alumni community'],
  },
]

const benefits = [
  {
    title: 'Social impact',
    copy: 'Use your ideas and skills to help organisations strengthen the contribution they make to society and the communities they serve.',
  },
  {
    title: 'Real consulting experience',
    copy: 'Take responsibility from project brief to final presentation while learning how a consulting team turns a complex problem into a practical answer.',
  },
  {
    title: 'Training and workshops',
    copy: 'Build a strong consulting toolkit through structured coaching, research sessions, and workshops with our professional network.',
  },
  {
    title: 'An inspiring community',
    copy: 'Meet ambitious students from different disciplines and learn alongside mentors who bring experience from the consulting industry.',
  },
]

export default function StudentsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="overflow-hidden rounded-[2.5rem] bg-[#73b744] text-white shadow-glow">
        <div className="relative grid gap-10 overflow-hidden px-8 py-10 sm:px-12 sm:py-14 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full border-[34px] border-white/15" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase section-kicker text-white/80">Students</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Your semester at 180DC Budapest.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Learn by doing, work with purpose, and grow with a team of people who want to make consulting more
              meaningful.
            </p>
          </div>
          <div className="relative hidden justify-end lg:flex">
            <img src="/brand/globe-green.png" alt="" className="h-56 w-56 object-contain brightness-0 invert opacity-90" />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Semester timeline</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Your journey at 180DC Budapest.</h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          From your first application to your next leadership role, each stage is designed to give you useful work,
          clear feedback, and a community to return to.
        </p>
      </div>

      <div className="relative mt-10 grid gap-5 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-[#73b744]/35 lg:block" />
        {timeline.map((stage, index) => (
          <article
            key={stage.label}
            className="service-reveal group relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-[#73b744] sm:p-7"
            style={{ animationDelay: `${index * 110}ms` }}
          >
            <div className="relative flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#73b744] text-sm font-bold text-white ring-8 ring-white">
                {stage.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{stage.label}</h3>
            </div>
            <ol className="mt-7 space-y-4">
              {stage.steps.map((step, stepIndex) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-[#73b744]">{stepIndex + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Your benefits</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">More than a line on your CV.</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className="group rounded-[2rem] border border-slate-200 bg-[#edf7e8] p-7 transition duration-300 hover:-translate-y-1 hover:bg-[#dff0d4] sm:p-8">
              <span className="text-4xl font-semibold text-[#73b744]">0{index + 1}</span>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow sm:p-10">
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Selection process</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Bring curiosity. We&apos;ll build the rest together.</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            We look for people who communicate clearly, learn quickly, and care about the work. Applications are
            followed by a structured assessment centre and a final conversation about fit, motivation, and coachability.
          </p>
          <div className="mt-8 border-t-2 border-[#73b744] pt-5 text-sm leading-7 text-slate-600">
            CV review &nbsp;•&nbsp; Assessment centre &nbsp;•&nbsp; Final interview
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="180DC Budapest student application" />
          <p className="text-xs font-semibold uppercase section-kicker text-slate-500">Apply now</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Send us your CV.</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Upload your CV and tell us what you would like to contribute. Applications are sent to
            budapest@180dc.org.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">Name<input name="name" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
            <label className="grid gap-2 text-sm text-slate-700">Email<input name="email" type="email" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">University<input name="university" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
            <label className="grid gap-2 text-sm text-slate-700">CV upload<input name="cv" type="file" accept=".pdf,.doc,.docx" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-[#edf7e8] file:px-4 file:py-2 file:font-semibold file:text-[#73b744]" /></label>
          </div>
          <label className="mt-4 grid gap-2 text-sm text-slate-700">Motivation<textarea name="message" rows="5" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none" /></label>
          <button className="mt-6 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d9f35]">Submit Application</button>
        </form>
      </div>
    </section>
  )
}
