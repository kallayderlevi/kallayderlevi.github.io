export default function EmailLink({ email = 'budapest@180dc.org', label = 'Send email' }) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label={`${label}: ${email}`}
      title={label}
      className="brand-link-hover inline-flex items-center gap-2 rounded-full border border-[#73b744]/30 bg-[#edf7e8] px-3 py-1.5 text-xs font-semibold text-[#5d9f35]"
    >
      <span aria-hidden="true">✉</span>
      <span>{label}</span>
    </a>
  )
}
