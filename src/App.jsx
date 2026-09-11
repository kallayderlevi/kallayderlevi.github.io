import BranchBanner from './components/BranchBanner'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Stats from './components/Stats'
import Vision from './components/Vision'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import ClientsPage from './pages/ClientsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import OurBranchPage from './pages/OurBranchPage'
import PartnersPage from './pages/PartnersPage'
import StudentsPage from './pages/StudentsPage'
import BranchAdminPage from './pages/BranchAdminPage'
import BlogPage from './pages/BlogPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-hidden bg-[#f8fafc] text-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-[0.03]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute right-[-8rem] top-[30rem] h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage>
                  <BranchBanner />
                  <Hero />
                  <Stats />
                  <Vision />
                  <Services />
                  <Blog />
                </HomePage>
              }
            />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/our-branch" element={<OurBranchPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/branch-admin" element={<BranchAdminPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
