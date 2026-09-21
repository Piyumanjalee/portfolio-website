import React, { useState, useEffect } from 'react'

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Career', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#07111f]/85 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Geometric Monogram Logo (PK) with Invert & Scale Hover Effect */}
        <a
          href="#home"
          className="group relative flex items-center justify-center select-none transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none bg-transparent"
          aria-label="Piyumanjalee Kavindi Home"
        >
          <svg
            className="w-10 h-10 sm:w-11 sm:h-11 overflow-visible"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Elegant cyan hexagon border that fills on hover */}
            <polygon
              points="24,4 41.32,14 41.32,34 24,44 6.68,34 6.68,14"
              stroke="#67e8f9"
              strokeWidth="1.25"
              strokeLinejoin="round"
              fill="transparent"
              className="transition-all duration-300 ease-in-out drop-shadow-[0_0_6px_rgba(103,232,249,0.5)] group-hover:fill-[#67e8f9] group-hover:stroke-cyan-300 group-hover:drop-shadow-[0_0_16px_rgba(103,232,249,0.9)]"
            />
            {/* Centered 'PK' monogram text that inverts to dark navbar color on hover */}
            <text
              x="24"
              y="24.5"
              textAnchor="middle"
              dominantBaseline="central"
              fill="#ffffff"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="800"
              fontSize="14.5"
              letterSpacing="0.08em"
              className="transition-all duration-300 ease-in-out group-hover:fill-[#07111f]"
            >
              PK
            </text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-[#081222]/60 border border-cyan-400/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                className={`nav-item relative font-orbitron font-medium tracking-wider text-[11px] lg:text-xs px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-400/10 shadow-[0_0_15px_rgba(103,232,249,0.25)] border border-cyan-400/30 active'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Mobile Nav Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/[0.04] border border-cyan-400/20 hover:border-cyan-400/40 text-slate-200 focus:outline-none transition-all"
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-5 h-[2px] bg-slate-200 rounded-full transition-all duration-300 transform ${
              mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'
            }`}
          ></span>
          <span
            className={`w-5 h-[2px] bg-slate-200 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`w-5 h-[2px] bg-slate-200 rounded-full transition-all duration-300 transform ${
              mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-6 mt-3 p-5 rounded-2xl bg-[#081222]/95 backdrop-blur-2xl border border-cyan-400/20 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-orbitron text-xs font-semibold tracking-wider px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-400/10 border border-cyan-400/30'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05]'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#67e8f9]"></span>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
