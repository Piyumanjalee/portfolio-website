import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#050c17] border-t border-cyan-400/10 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="flex items-center gap-1.5 text-sm">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-cyan-300 font-bold">S. H. M. P. K. Senadheera</span>
          </p>
          <p className="text-slate-500 text-[11px]">
            BSc (ICT) Undergraduate • Rajarata University of Sri Lanka
          </p>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/Piyumanjalee"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-base"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/piyumanjalee-kavindi-senadheera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in text-base"></i>
          </a>
          <a
            href="mailto:kpiyumanjalee2002@gmail.com"
            className="text-slate-400 hover:text-cyan-300 transition-colors"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope text-base"></i>
          </a>
        </div>

        <p className="text-slate-500 text-[11px] text-center md:text-right">
          Crafted with React 19, Tailwind CSS & Glassmorphism Design
        </p>
      </div>
    </footer>
  )
}
