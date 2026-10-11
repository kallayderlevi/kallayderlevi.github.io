export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8 lg:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5d9f35]">Application received</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Thank you for applying.</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        We have received your application and will contact you by email with the next steps.
      </p>
      <a href="/" className="mt-8 inline-flex rounded-full bg-[#73b744] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#5d9f35]">
        Back to homepage
      </a>
    </section>
  )
}
