import { socialLinks } from '../config/socialLinks'

export default function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? 'flex flex-wrap gap-2' : 'flex flex-wrap gap-3'}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open 180 Degrees Consulting on ${social.label}`}
          className={compact
            ? 'rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-emerald-600/30 hover:text-emerald-700'
            : 'rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-600/30 hover:text-emerald-700'}
        >
          {social.label}
        </a>
      ))}
    </div>
  )
}
