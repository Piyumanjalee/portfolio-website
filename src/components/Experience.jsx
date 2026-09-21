import React, { useState } from 'react'

export default function Experience() {
  const [expanded, setExpanded] = useState({ exp1: false, exp2: false, exp3: false })

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const timelineItems = [
    {
      id: 'exp1',
      role: 'BSc (ICT) Undergraduate & Specialisation Candidate',
      organization: 'Rajarata University of Sri Lanka',
      period: '2023 – 2027 (Expected)',
      status: 'Current',
      statusColor: 'bg-cyan-400/10 text-cyan-300 border-cyan-400/30 shadow-[0_0_10px_rgba(103,232,249,0.15)]',
      dotColor: 'bg-cyan-400 ring-cyan-400/30',
      description:
        'Enrolled in the honours ICT degree program with focused specialisation in Full-Stack Web Development & Mobile Application Engineering. Rigorously mastering software design patterns, database architecture (MongoDB & MySQL), networking protocols, and applied intelligent systems.',
      keyTakeaways: [
        'Specialised in production-grade web systems and mobile platforms',
        'Built a strong theoretical foundation in algorithms, data structures, and computer science',
        'Consistently applying academic concepts directly into public open-source implementations'
      ]
    },
    {
      id: 'exp2',
      role: 'Open-Source Full-Stack & ML Developer',
      organization: 'GitHub Independent Projects',
      period: '2023 – Present',
      status: 'Active',
      statusColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-400/30',
      dotColor: 'bg-indigo-400 ring-indigo-400/30',
      description:
        'Engineered seven comprehensive public GitHub repositories demonstrating modern software craft. Spans from JWT-secured productivity trackers (EffortGrid) and cryptography studios (CipherEdu with FastAPI) to deep learning computer vision (MobileNetV2) and natural language spam classification (Streamlit).',
      keyTakeaways: [
        'Built production-ready REST APIs with FastAPI, Pydantic, and Node.js/Express',
        'Implemented computer vision safety models with MobileNetV2 transfer learning',
        'Maintained high code quality, automated docs, and responsive UI designs'
      ]
    },
    {
      id: 'exp3',
      role: 'Full-Stack Developer (Group Project)',
      organization: 'Opal Muse E-Commerce Website',
      period: 'Collaborative Project',
      status: 'Delivered',
      statusColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
      dotColor: 'bg-emerald-400 ring-emerald-400/30',
      description:
        'Collaborated in a development team to engineer a complete online clothing store. Contributed to responsive UI design, customer registration, shopping cart state, checkout pipelines, and database operations using PHP, MySQL, and JavaScript.',
      keyTakeaways: [
        'Integrated multi-page user flows and server-side authentication',
        'Managed relational database schemas and SQL transactions',
        'Practiced Git branching, pull requests, and collaborative code reviews'
      ]
    }
  ]

  const services = [
    {
      title: 'Full-Stack Web Engineering',
      icon: 'fa-solid fa-laptop-code',
      color: 'from-indigo-600 to-indigo-800',
      description:
        'Building high-performance, single-page web applications with React 19, Vite, and Tailwind CSS backed by Node.js/Express or FastAPI and MongoDB/MySQL.'
    },
    {
      title: 'Mobile App Solutions',
      icon: 'fa-solid fa-mobile-screen-button',
      color: 'from-cyan-600 to-cyan-800',
      description:
        'Developing responsive, user-friendly mobile experiences with Flutter, Android, and React Native with clean navigation and offline persistence.'
    },
    {
      title: 'RESTful APIs & Microservices',
      icon: 'fa-solid fa-server',
      color: 'from-blue-600 to-cyan-700',
      description:
        'Designing secure, schema-validated REST APIs using FastAPI (Python) or Express (Node.js) with JWT authentication, Pydantic, and Swagger/OpenAPI.'
    },
    {
      title: 'Applied AI & Machine Learning',
      icon: 'fa-solid fa-brain',
      color: 'from-purple-600 to-indigo-700',
      description:
        'Deploying practical machine learning models with scikit-learn, Naive Bayes, and MobileNetV2 transfer learning via interactive Streamlit web apps.'
    }
  ]

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 reveal-on-scroll">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            CAREER & SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Trajectory & Capabilities
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-xl mx-auto">
            My development journey, practical engineering milestones, and the core solutions I deliver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work / Academic Timeline (Left) */}
          <div className="lg:col-span-6">
            <h3 className="text-lg sm:text-xl font-bold font-orbitron mb-8 tracking-wider text-white border-b border-cyan-400/20 pb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 text-sm">
                <i className="fa-solid fa-timeline"></i>
              </span>
              Development Trajectory
            </h3>

            <div className="relative pl-7 border-l-2 border-cyan-400/25 space-y-8 py-2">
              {timelineItems.map((item) => (
                <div key={item.id} className="timeline-item relative">
                  {/* Glowing Timeline Dot */}
                  <span className={`timeline-node absolute -left-[33px] top-2 w-[10px] h-[10px] rounded-full border-2 border-[#07111f] ring-4 transition-all duration-300 ${item.dotColor}`}></span>

                  <div className="glass-panel glass-card-glow rounded-2xl p-6 sm:p-7 relative transform hover:-translate-y-1 transition-all duration-300">
                    <span className={`absolute top-5 right-5 text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full uppercase border ${item.statusColor}`}>
                      {item.status}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-orbitron text-white pr-20 leading-snug">
                      {item.role}
                    </h4>
                    <div className="text-xs font-mono font-semibold text-cyan-300 mt-1">
                      {item.organization}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar text-[10px]"></i> {item.period}
                    </div>

                    <p
                      className={`text-xs sm:text-sm text-slate-300/85 mt-4 leading-relaxed transition-all duration-300 ${
                        expanded[item.id] ? 'line-clamp-none' : 'line-clamp-2'
                      }`}
                    >
                      {item.description}
                    </p>

                    {expanded[item.id] && (
                      <div className="mt-4 pt-3 border-t border-cyan-400/10 space-y-1.5 animate-fade-in-up">
                        {item.keyTakeaways.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <i className="fa-solid fa-angle-right text-cyan-400 text-[10px] mt-0.5 shrink-0"></i>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mt-3 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{expanded[item.id] ? 'Show Less' : 'Read More'}</span>
                      <i
                        className={`fa-solid fa-chevron-down text-[9px] transition-transform duration-300 ${
                          expanded[item.id] ? 'rotate-180' : ''
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Cards Grid (Right) */}
          <div className="lg:col-span-6">
            <h3 className="text-lg sm:text-xl font-bold font-orbitron mb-8 tracking-wider text-white border-b border-cyan-400/20 pb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-sm">
                <i className="fa-solid fa-cubes"></i>
              </span>
              Technical Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass-panel glass-card-glow rounded-2xl p-6 flex flex-col hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_15px_30px_rgba(103,232,249,0.15)] transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-xl text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <i className={service.icon}></i>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold font-orbitron text-white mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Availability Banner */}
            <div className="mt-7 glass-panel p-5 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-indigo-950/40 to-cyan-950/40 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl shrink-0">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-orbitron text-white">
                  Seeking Internship / Junior SE Role
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Available for immediate software engineering internships, junior developer positions, and technical collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
