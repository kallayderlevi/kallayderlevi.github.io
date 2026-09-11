import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import { useLanguage } from '../i18n'

const footerLinks = [
  { label: 'Our Vision', href: '/#vision' },
  { label: 'Our Branch', href: '/our-branch' },
  { label: 'Clients', href: '/clients' },
  { label: 'Partners', href: '/partners' },
  { label: 'Students', href: '/students' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <img
            src="/brand/logo-budapest-full.png"
            alt="180 Degrees Consulting Budapest"
            className="h-16 w-auto max-w-[270px] object-contain object-left"
          />
          <p className="mt-2 text-sm text-slate-500">Branch of 180 Degrees Consulting. Built for social impact.</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#5d9f35]">{t('findUs')}</p>
          <div className="mt-3">
            <SocialLinks compact />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500 lg:px-8">
        © 2026 180 Degrees Consulting Budapest. All rights reserved.
      </div>
    </footer>
  )
}