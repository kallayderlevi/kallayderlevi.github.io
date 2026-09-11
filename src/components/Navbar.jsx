import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Our Vision', href: '/#vision' },
  { label: 'Clients', href: '/clients' },
  { label: 'Partners', href: '/partners' },
  { label: 'Students', href: '/students' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Our Branch', href: '/our-branch' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/clients"
            className="rounded-full border border-emerald-600/20 bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            For Clients
          </a>
          <a
            href="/students"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Join as Student
          </a>
        </div>

        <NavLink to="/" className="order-last ml-auto flex min-w-0 shrink items-center">
          <img
            src="/brand/logo-budapest-full.png"
            alt="180 Degrees Consulting Budapest"
            className="h-16 w-auto max-w-[190px] object-contain object-right sm:h-[5.5rem] sm:max-w-[330px]"
          />
        </NavLink>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="order-first flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="text-2xl leading-none">{mobileOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => `rounded-xl px-4 py-3 text-sm ${isActive ? 'bg-[#edf7e8] font-semibold text-[#5d9f35]' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 grid gap-2 border-t border-slate-200 pt-3 sm:grid-cols-2">
              <a href="/clients" onClick={() => setMobileOpen(false)} className="rounded-full bg-[#73b744] px-5 py-3 text-center text-sm font-semibold text-white">For Clients</a>
              <a href="/students" onClick={() => setMobileOpen(false)} className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700">Join as Student</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}