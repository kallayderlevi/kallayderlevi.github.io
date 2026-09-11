import { socialLinks } from '../config/socialLinks'

export default function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? 'flex flex-wrap items-center gap-x-4 gap-y-2' : 'flex flex-wrap items-center gap-x-5 gap-y-2'}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open 180 Degrees Consulting on ${social.label}`}
          className="border-b border-[#73b744]/40 pb-1 text-sm font-semibold text-[#5d9f35] transition hover:border-[#73b744] hover:text-[#4f8d2d]"
        >
          {social.label}
        </a>
      ))}
    </div>
  )
}
