import React, { useState, useEffect } from 'react'
import profileImg from '../assets/hero-profile-cutout.png'

const PHRASES = [
  'Full-Stack Web Applications.',
  'Cross-Platform Mobile Apps.',
  'FastAPI & Node.js REST APIs.',
  'Machine Learning Solutions.'
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Dynamic Typewriter effect looping through skills
  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex]
    let timer

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause at full phrase before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length)
      timer = setTimeout(() => {}, 400)
    } else {
      // Typing speed vs deleting speed
      const speed = isDeleting ? 40 : 85
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentPhrase.substring(0, displayedText.length - 1)
            : currentPhrase.substring(0, displayedText.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, phraseIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Aurora Ambient Neon Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-400/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[50%] right-[35%] w-[25vw] h-[25vw] max-w-[320px] max-h-[320px] rounded-full bg-violet-600/10 blur-[100px]"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start animate-fade-in-up">
          {/* Eyebrow & Status Badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-semibold tracking-[2px] uppercase bg-cyan-950/40 border border-cyan-400/30 text-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              SEEKING INTERNSHIP / JUNIOR SE ROLE
            </span>
          </div>

          {/* Name & Academic Identity */}
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-mono text-cyan-300 tracking-wider uppercase block font-semibold">
              Hello, I am
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-orbitron text-white tracking-wide">
              PIYUMANJALEE KAVINDI
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-300/90 font-medium mt-1">
              S. H. M. P. K. Senadheera • Full-Stack & Mobile Developer
            </p>
          </div>

          {/* Attention-Grabbing Headline with Skills Typewriter */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-[1.2] min-h-[90px] sm:min-h-[110px]">
            <span className="text-white">I build </span>
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(103,232,249,0.7)] inline-block">
              {displayedText}
              <span className="inline-block w-1 sm:w-1.5 h-[0.85em] bg-cyan-400 ml-1.5 translate-y-1 animate-pulse drop-shadow-[0_0_10px_#67e8f9]"></span>
            </span>
          </h1>

          {/* Bio text from CV */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300/90 leading-relaxed mb-7 max-w-xl text-center lg:text-left">
            BSc in Information and Communication Technology undergraduate (2023 – 2027) at Rajarata University of Sri Lanka, specialising in full-stack and mobile application development. Experienced in React, Node.js/Express, FastAPI, PHP, MongoDB/MySQL, and Machine Learning with 7 public GitHub projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start items-center mb-8">
            <a
              href="#contact"
              className="btn-sheen w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_30px_rgba(103,232,249,0.45)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
              <span>Get In Touch</span>
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 border border-cyan-400/30 hover:border-cyan-400 bg-white/[0.03] hover:bg-cyan-400/10 text-cyan-300 hover:text-cyan-200 font-bold text-xs tracking-wider uppercase rounded-xl shadow-[0_0_15px_rgba(103,232,249,0.05)] hover:shadow-[0_0_25px_rgba(103,232,249,0.25)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <i className="fa-solid fa-laptop-code text-xs"></i>
              <span>View My Projects</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center lg:justify-start items-center">
            <a
              href="https://www.linkedin.com/in/piyumanjalee-kavindi-senadheera/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#081222]/80 border border-cyan-400/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:bg-cyan-400/10 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(103,232,249,0.3)] transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in text-base"></i>
            </a>
            <a
              href="https://github.com/Piyumanjalee"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#081222]/80 border border-cyan-400/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:bg-cyan-400/10 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(103,232,249,0.3)] transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github text-base"></i>
            </a>
            <a
              href="mailto:kpiyumanjalee2002@gmail.com"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#081222]/80 border border-cyan-400/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 hover:bg-cyan-400/10 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(103,232,249,0.3)] transition-all duration-300"
              aria-label="Direct Email"
            >
              <i className="fa-solid fa-envelope text-base"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Seamlessly Blended Portrait with Integrated Backlighting */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] flex items-center justify-center">
            {/* Integrated Subtle Backlighting Radial Glows behind head and shoulders */}
            <div className="absolute top-[10%] left-[15%] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-cyan-400/25 blur-[75px] sm:blur-[95px] -z-10 animate-pulse-glow pointer-events-none"></div>
            <div className="absolute top-[25%] right-[10%] w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-indigo-500/25 blur-[85px] sm:blur-[105px] -z-10 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute bottom-[10%] inset-x-[10%] h-[160px] rounded-full bg-cyan-500/15 blur-[60px] -z-10 pointer-events-none"></div>

            {/* Seamless, Feathered Figure with No Hard Outline or Container Shape */}
            <div className="relative z-10 w-full flex justify-center">
              <img
                src={profileImg}
                alt="Full Stack Developer Portrait"
                className="w-full h-auto max-h-[580px] object-contain select-none pointer-events-none drop-shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Mouse Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
        <a href="#about" className="flex flex-col items-center gap-2 group pointer-events-auto" aria-label="Scroll to About section">
          <div className="w-[26px] h-[42px] border-2 border-cyan-400/40 rounded-[20px] relative bg-cyan-950/20 backdrop-blur-[4px] float-mouse group-hover:border-cyan-300 transition-colors">
            <div className="w-[3px] h-[8px] bg-cyan-300 rounded-[2px] absolute top-[8px] left-1/2 transform -translate-x-1/2 scroll-wheel"></div>
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-cyan-300 tracking-[2.5px] uppercase transition-colors">
            SCROLL DOWN
          </span>
        </a>
      </div>
    </section>
  )
}
