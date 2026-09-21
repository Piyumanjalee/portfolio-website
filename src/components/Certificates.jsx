import React, { useState, useRef, useEffect, useCallback } from 'react'
import { certificatesData } from '../certificatesData.js'

/**
 * Returns the corresponding image filename for display.
 * If the certificate file is a PDF, it maps to the rendered .jpg preview image.
 */
const getImageFilename = (filename = '') => {
  if (filename.endsWith('.pdf')) {
    return filename.replace(/\.pdf$/i, '.jpg')
  }
  return filename
}

/**
 * Dynamically resolves the asset URL for the certificate image preview.
 * Incorporates dynamic import helper: new URL(`../assets/certificates/${imgFilename}`, import.meta.url).href
 */
const getCertificateImageUrl = (item) => {
  if (!item || !item.filename) return ''
  const imgFilename = getImageFilename(item.filename)

  try {
    return new URL(`../assets/certificates/${imgFilename}`, import.meta.url).href
  } catch {
    return `src/assets/certificates/${imgFilename}`
  }
}

/**
 * Dynamically resolves the original PDF asset URL if the certificate is a PDF.
 * Incorporates: new URL(`../assets/certificates/${item.filename}`, import.meta.url).href
 */
const getCertificatePdfUrl = (item) => {
  if (!item || !item.filename) return null
  if (item.type === 'pdf' || item.filename.endsWith('.pdf')) {
    try {
      return new URL(`../assets/certificates/${item.filename}`, import.meta.url).href
    } catch {
      return `src/assets/certificates/${item.filename}`
    }
  }
  return null
}

/**
 * Helper to determine issuer branding (icon, badge colors)
 */
const getIssuerBranding = (issuer = '', title = '') => {
  const normIssuer = issuer.toLowerCase()
  const normTitle = title.toLowerCase()

  if (normIssuer.includes('google') || normTitle.includes('google')) {
    return {
      icon: 'fa-brands fa-google',
      color: 'text-amber-400 bg-amber-500/10 border-amber-400/30'
    }
  }
  if (normIssuer.includes('hackerrank')) {
    return {
      icon: 'fa-solid fa-code',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-400/30'
    }
  }
  if (normIssuer.includes('uom') || normIssuer.includes('moratuwa')) {
    return {
      icon: 'fa-solid fa-building-columns',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/30'
    }
  }
  if (normIssuer.includes('udemy')) {
    return {
      icon: 'fa-solid fa-play',
      color: 'text-purple-400 bg-purple-500/10 border-purple-400/30'
    }
  }
  return {
    icon: 'fa-solid fa-certificate',
    color: 'text-cyan-300 bg-cyan-950/70 border-cyan-400/30'
  }
}

export default function Certificates({
  certificates = certificatesData,
  title = 'Licenses & Certifications',
  subtitle = 'Verified professional credentials, specialization certificates, and continuous technical coursework',
  badge = 'VERIFIED ACADEMIC & INDUSTRY CREDENTIALS'
}) {
  const carouselRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [previewCert, setPreviewCert] = useState(null)

  // Drag-to-scroll states
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  // Update navigation button states, progress percentage, and active card index
  const updateScrollStatus = useCallback(() => {
    const el = carouselRef.current
    if (!el) return

    const { scrollLeft: currentLeft, scrollWidth, clientWidth } = el
    const maxScroll = scrollWidth - clientWidth

    setCanScrollLeft(currentLeft > 10)
    setCanScrollRight(currentLeft < maxScroll - 10)

    const progress = maxScroll > 0 ? (currentLeft / maxScroll) * 100 : 0
    setScrollProgress(Math.min(100, Math.max(0, progress)))

    // Calculate nearest active item index
    const cards = el.querySelectorAll('[data-certificate-card]')
    if (cards.length > 0) {
      let closestIdx = 0
      let minDistance = Infinity
      const containerRect = el.getBoundingClientRect()

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect()
        const distance = Math.abs(cardRect.left - containerRect.left)
        if (distance < minDistance) {
          minDistance = distance
          closestIdx = idx
        }
      })
      setActiveIndex(closestIdx)
    }
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    updateScrollStatus()
    window.addEventListener('resize', updateScrollStatus)
    return () => window.removeEventListener('resize', updateScrollStatus)
  }, [updateScrollStatus, certificates])

  // Scroll by one card increment
  const scroll = (direction) => {
    const el = carouselRef.current
    if (!el) return

    const card = el.querySelector('[data-certificate-card]')
    const cardWidth = card ? card.offsetWidth + 24 : 380
    const offset = direction === 'left' ? -cardWidth : cardWidth

    el.scrollBy({
      left: offset,
      behavior: 'smooth'
    })
  }

  // Scroll to a specific certificate index
  const scrollToIndex = (index) => {
    const el = carouselRef.current
    if (!el) return

    const cards = el.querySelectorAll('[data-certificate-card]')
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }
  }

  // Keyboard navigation when section is focused
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      scroll('left')
    } else if (e.key === 'ArrowRight') {
      scroll('right')
    }
  }

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e) => {
    const el = carouselRef.current
    if (!el) return
    setIsDragging(true)
    setHasMoved(false)
    setStartX(e.pageX - el.offsetLeft)
    setScrollLeft(el.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const el = carouselRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 1.3
    if (Math.abs(walk) > 5) {
      setHasMoved(true)
    }
    el.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleCardClick = (cert, imageUrl, pdfUrl, e) => {
    if (hasMoved) {
      e.preventDefault()
      return
    }
    setPreviewCert({ ...cert, imageUrl, pdfUrl })
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    if (previewCert) {
      document.body.style.overflow = 'hidden'
      const handleModalKeyDown = (e) => {
        if (e.key === 'Escape') setPreviewCert(null)
      }
      window.addEventListener('keydown', handleModalKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleModalKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [previewCert])

  return (
    <section
      id="certificates"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 focus:outline-none reveal-on-scroll"
      aria-label="Certifications Section"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
              {badge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
              <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 mt-2 max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Carousel Arrow Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline-block mr-2">
              <span className="text-cyan-300 font-bold">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              {' / '}
              {String(certificates.length).padStart(2, '0')}
            </span>

            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous certificate"
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 focus:outline-none ${
                canScrollLeft
                  ? 'bg-[#081222]/90 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(103,232,249,0.4)] cursor-pointer'
                  : 'bg-[#081222]/40 border-slate-700/30 text-slate-600 cursor-not-allowed'
              }`}
            >
              <i className="fa-solid fa-chevron-left text-sm" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next certificate"
              className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 focus:outline-none ${
                canScrollRight
                  ? 'bg-[#081222]/90 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(103,232,249,0.4)] cursor-pointer'
                  : 'bg-[#081222]/40 border-slate-700/30 text-slate-600 cursor-not-allowed'
              }`}
            >
              <i className="fa-solid fa-chevron-right text-sm" />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full h-1 bg-slate-800/80 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-300 transition-all duration-200"
            style={{ width: `${Math.max(10, scrollProgress)}%` }}
          />
        </div>

        {/* Horizontally Scrollable Container (Smooth, No Scrollbar, Responsive, Touch & Drag) */}
        <div
          ref={carouselRef}
          onScroll={updateScrollStatus}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory touch-pan-x no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {certificates.map((item, index) => {
            const imageUrl = getCertificateImageUrl(item)
            const pdfUrl = getCertificatePdfUrl(item)
            const isPdf = item.type === 'pdf' || item.filename.endsWith('.pdf')
            const isCurrent = activeIndex === index
            const branding = getIssuerBranding(item.issuer, item.title)

            return (
              <div
                key={item.filename || index}
                data-certificate-card
                onClick={(e) => handleCardClick(item, imageUrl, pdfUrl, e)}
                className={`snap-start flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[370px] lg:w-[390px] rounded-2xl glass-panel glass-card-glow border transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer ${
                  isCurrent
                    ? 'border-cyan-400/40 shadow-[0_15px_35px_rgba(103,232,249,0.18)]'
                    : 'border-cyan-400/15 hover:border-cyan-400/40 hover:-translate-y-1.5'
                }`}
              >
                <div>
                  {/* Image Preview Box (All Certificates Render as Image Cards) */}
                  <div className="relative aspect-[16/10] bg-[#050b14] overflow-hidden border-b border-cyan-400/15">
                    <img
                      src={imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Direct base path fallback
                        e.currentTarget.src = `src/assets/certificates/${getImageFilename(item.filename)}`
                      }}
                    />

                    {/* Gradient vignette for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081222] via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Floating Issuer Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border backdrop-blur-md flex items-center gap-1.5 ${branding.color}`}
                      >
                        <i className={branding.icon} />
                        <span>{item.issuer}</span>
                      </span>
                    </div>

                    {/* Type Badge (IMAGE or PDF) */}
                    <div className="absolute top-3.5 right-3.5">
                      <span
                        className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-md shadow-sm border ${
                          isPdf
                            ? 'text-rose-300 bg-rose-950/80 border-rose-400/30'
                            : 'text-cyan-300 bg-cyan-950/80 border-cyan-400/30'
                        }`}
                      >
                        <i className={isPdf ? 'fa-solid fa-file-pdf text-[9px]' : 'fa-regular fa-image text-[9px]'} />
                        <span>{isPdf ? 'PDF' : 'IMAGE'}</span>
                      </span>
                    </div>

                    {/* Quick Inspect Hover Overlay Button (matches user screenshot) */}
                    <div className="absolute inset-0 bg-[#07111f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setPreviewCert({ ...item, imageUrl, pdfUrl })
                        }}
                        className="px-4 py-2 rounded-xl bg-cyan-400 text-[#07111f] text-xs font-orbitron font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(103,232,249,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <i className="fa-solid fa-magnifying-glass-plus" />
                        Inspect Certificate
                      </button>
                    </div>
                  </div>

                  {/* Card Content Details (matching user screenshot) */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                      <span className="text-cyan-300 font-bold">{item.issuer}</span>
                      <span className="text-slate-400">{item.date || 'Date'}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[11px] font-mono text-slate-400 truncate">
                      File: <span className="text-slate-300">{item.filename}</span>
                    </p>
                  </div>
                </div>

                {/* Card Action Footer (matching user screenshot) */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-cyan-400/10 bg-[#081222]/40 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setPreviewCert({ ...item, imageUrl, pdfUrl })
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-semibold bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(103,232,249,0.35)] transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-magnifying-glass-plus text-[11px]" />
                    <span>Inspect Preview</span>
                  </button>

                  <a
                    href={pdfUrl || imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 rounded-xl text-xs bg-white/[0.04] border border-cyan-400/20 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-all flex items-center justify-center"
                    title={isPdf ? 'Open / Download Original PDF' : 'Open Original Image'}
                  >
                    <i className={isPdf ? 'fa-solid fa-file-pdf text-rose-400' : 'fa-solid fa-arrow-up-right-from-square'} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {certificates.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => scrollToIndex(dotIdx)}
              aria-label={`Jump to certificate ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === dotIdx
                  ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#67e8f9]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4 text-[11px] font-mono text-slate-400">
          <i className="fa-solid fa-arrows-left-right text-cyan-400 animate-pulse" />
          <span>Swipe horizontally to browse all 10 certificates</span>
        </div>
      </div>

      {/* ======================================================================
          Fullscreen Certificate Preview Modal (High-Resolution View)
          ====================================================================== */}
      {previewCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#020712]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in-up"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#081222] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(103,232,249,0.2)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-cyan-400/20 flex items-center justify-between bg-[#050b14]/70">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center text-sm border text-cyan-300 bg-cyan-950 border-cyan-400/30">
                  <i className={previewCert.pdfUrl ? 'fa-solid fa-file-pdf text-rose-400' : 'fa-solid fa-certificate'} />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-orbitron text-white leading-tight">
                    {previewCert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {previewCert.issuer} • {previewCert.filename}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPreviewCert(null)}
                aria-label="Close preview"
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-cyan-400/20 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/20 transition-all flex items-center justify-center focus:outline-none"
              >
                <i className="fa-solid fa-xmark text-base" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-4 sm:p-6 bg-[#030812] flex items-center justify-center max-h-[60vh] overflow-auto">
              <img
                src={previewCert.imageUrl}
                alt={previewCert.title}
                className="max-h-[55vh] w-auto max-w-full rounded-lg object-contain shadow-lg border border-cyan-400/10"
                onError={(e) => {
                  e.currentTarget.src = `src/assets/certificates/${getImageFilename(previewCert.filename)}`
                }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-cyan-400/20 bg-[#050b14]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-400 truncate">
                File: <span className="text-cyan-300 font-semibold">{previewCert.filename}</span>
              </div>

              <div className="flex items-center gap-3">
                {previewCert.pdfUrl && (
                  <a
                    href={previewCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-rose-500/20 border border-rose-400/40 text-rose-300 hover:bg-rose-500 hover:text-white transition-all flex items-center gap-2"
                  >
                    <i className="fa-solid fa-file-pdf" />
                    <span>Open Original PDF</span>
                  </a>
                )}

                <a
                  href={previewCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] transition-all flex items-center gap-2"
                >
                  <span>Open Full Image</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[11px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
