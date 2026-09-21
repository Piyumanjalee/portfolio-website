import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ChatAssistant from './components/ChatAssistant'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // ScrollSpy with IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'education',
      'projects',
      'skills',
      'achievements',
      'experience',
      'contact'
    ]
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0
      }
    )

    sectionElements.forEach((el) => observer.observe(el))

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Scroll Reveal Observer for entrance animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    if (revealElements.length === 0) return

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    )

    revealElements.forEach((el) => revealObserver.observe(el))

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el))
    }
  }, [])

  return (
    <div className="relative bg-[#07111f] min-h-screen text-[#f5f7ff] overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top sticky frosted navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main page content matching navigation order */}
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Interactive AI Chat Assistant */}
      <ChatAssistant />
    </div>
  )
}
