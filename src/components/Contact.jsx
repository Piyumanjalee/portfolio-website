import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate Network Request Delay
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 reveal-on-scroll">
      {/* Aurora Ambient Neon Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-xl mx-auto">
            Reach out for collaborations, software development inquiries, or just to say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Card (Left) */}
          <div className="lg:col-span-7 glass-panel glass-card-glow rounded-2xl p-7 sm:p-9 border border-cyan-400/20 shadow-2xl">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-cyan-400/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <h3 className="text-base sm:text-lg font-bold font-orbitron text-white">
                  Send a Secure Message
                </h3>
              </div>
              <i className="fa-solid fa-paper-plane text-cyan-400 text-lg opacity-80"></i>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-cyan-300 tracking-wider uppercase">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Piyumanjalee Kavindi"
                  className="w-full bg-[#081222]/80 border border-cyan-400/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-cyan-300 tracking-wider uppercase">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kavindi@example.com"
                  className="w-full bg-[#081222]/80 border border-cyan-400/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-cyan-300 tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd love to discuss a project..."
                  className="w-full bg-[#081222]/80 border border-cyan-400/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-sheen mt-2 w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white py-4 px-6 font-orbitron font-bold text-xs tracking-wider uppercase rounded-xl transition-all shadow-[0_4px_20px_rgba(79,70,229,0.4)] hover:shadow-[0_6px_25px_rgba(103,232,249,0.45)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-medium text-center flex items-center justify-center gap-2 animate-fade-in-up">
                  <i className="fa-solid fa-circle-check text-sm"></i>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </form>
          </div>

          {/* Connection Details Panel (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div>
              <h3 className="text-xl font-bold font-orbitron mb-4 tracking-wider text-white">
                LET'S CONNECT
              </h3>
              <p className="text-sm text-slate-300/85 leading-relaxed mb-6">
                Whether you want to discuss a new software architecture, ask questions about my existing open-source code repositories, or need a developer for contract positions - feel free to reach out. I am highly responsive over email and LinkedIn.
              </p>

              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-400/20">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Email Address
                  </span>
                  <a
                    href="mailto:kpiyumanjalee2002@gmail.com"
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 hover:text-white transition-colors group break-all"
                  >
                    <span className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black transition-all shrink-0">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span>kpiyumanjalee2002@gmail.com</span>
                  </a>
                </div>

                {/* Phone */}
                <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-400/20">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+94756395636"
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono text-cyan-300 hover:text-white transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-black transition-all shrink-0">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <span>+94 75 639 5636</span>
                  </a>
                </div>

                {/* Location */}
                <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-400/20">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Location
                  </span>
                  <div className="inline-flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <div>
                      <p className="font-semibold text-white">Karandeniya, Sri Lanka</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-mono">89/A, Mahawaththa, Madakumbura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Cards */}
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                Professional Networks
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/piyumanjalee-kavindi-senadheera"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center gap-3.5 transform hover:translate-x-1.5 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center text-lg text-white bg-[#0077b5] shadow group-hover:scale-105 transition-transform shrink-0">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono truncate">
                      /in/piyumanjalee-kavindi
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Piyumanjalee"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center gap-3.5 transform hover:translate-x-1.5 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <span className="w-10 h-10 rounded-lg flex items-center justify-center text-lg text-white bg-[#181717] border border-white/10 shadow group-hover:scale-105 transition-transform shrink-0">
                    <i className="fa-brands fa-github"></i>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono truncate">
                      github.com/Piyumanjalee
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
