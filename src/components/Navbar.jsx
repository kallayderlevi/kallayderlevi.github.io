import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Our Vision', href: '/#vision' },
  { label: 'Our Branch', href: '/our-branch' },
  { label: 'Clients', href: '/clients' },
  { label: 'Partners', href: '/partners' },
  { label: 'Students', href: '/students' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
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

        <NavLink to="/" className="order-last ml-auto flex shrink-0 items-center">
          <img
            src="/brand/logo-budapest-full.png"
            alt="180 Degrees Consulting Budapest"
            className="h-20 w-auto max-w-[250px] object-contain object-right sm:h-[5.5rem] sm:max-w-[330px]"
          />
        </NavLink>
      </div>
    </header>
  )
}