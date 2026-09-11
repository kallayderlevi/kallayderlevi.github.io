export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Contact</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Send an inquiry or apply with your CV.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          All messages are routed to budapest@180dc.org. Students can upload a CV directly through the application
          form below.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <form
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-glow sm:p-10"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="180DC Budapest inquiry" />

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">General inquiry</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">For clients and partners</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            For NGOs, non-profits, companies, universities, sponsors, and collaborators who want to contact the
            branch about a project, partnership, or event.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">
              Name
              <input
                name="name"
                type="text"
                placeholder="Alex Johnson"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              Organisation
              <input
                name="organisation"
                type="text"
                placeholder="Organisation name"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">
              Email
              <input
                name="email"
                type="email"
                placeholder="name@example.com"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              I am a
              <select
                name="inquiry_type"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500"
              >
                <option>NGO / Non-profit</option>
                <option>Company / Social enterprise</option>
                <option>Partner</option>
                <option>Student</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm text-slate-700">
            Message
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us what you are looking for."
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Send Inquiry
          </button>
        </form>

        <form
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-glow sm:p-10"
          id="student-application"
          action="https://formsubmit.co/budapest@180dc.org"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="180DC Budapest student application" />

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Student application</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">Apply with your CV</h3>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Upload your CV here. This form is sent directly to budapest@180dc.org along with your message.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">
              Name
              <input
                name="name"
                type="text"
                placeholder="Alex Johnson"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              Email
              <input
                name="email"
                type="email"
                placeholder="name@example.com"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
              />
            </label>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-slate-700">
              University
              <input
                name="university"
                type="text"
                placeholder="University in Budapest"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-700">
              CV upload
              <input
                name="cv"
                type="file"
                accept=".pdf,.doc,.docx"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-emerald-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-700"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm text-slate-700">
            Motivation
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us why you want to join 180DC Budapest."
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-500"
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Submit Application
          </button>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            If the upload fails, email your CV directly to budapest@180dc.org with the subject line “180DC Budapest
            application”.
          </p>
        </form>
      </div>
    </section>
  )
}