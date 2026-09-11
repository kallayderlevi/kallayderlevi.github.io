const stats = [
  ['180+', 'Branches Worldwide'],
  ['35+', 'Countries'],
  ['10,000+', 'Student Consultants'],
  ['5,000,000+', 'Hours of Pro Bono Consulting Delivered'],
]

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(([value, label], index) => (
          <div
            key={label}
            className={`px-6 py-8 text-center lg:px-8 ${index < stats.length - 1 ? 'border-b border-slate-200 lg:border-b-0 lg:border-r' : ''}`}
          >
            <div className="text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}