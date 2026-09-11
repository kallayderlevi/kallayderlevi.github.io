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
            ? 'rounded-full border border-[#73b744]/30 bg-[#edf7e8] px-4 py-2.5 text-sm font-semibold text-[#5d9f35] transition hover:-translate-y-0.5 hover:border-[#73b744] hover:bg-[#dff0d4]'
            : 'rounded-full border border-[#73b744]/30 bg-[#edf7e8] px-6 py-3.5 text-sm font-semibold text-[#5d9f35] shadow-sm transition hover:-translate-y-0.5 hover:border-[#73b744] hover:bg-[#dff0d4]'}
        >
          {social.label}
        </a>
      ))}
    </div>
  )
}
