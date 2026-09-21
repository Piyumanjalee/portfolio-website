import React from 'react'

export default function Achievements() {
  const milestones = [
    {
      id: 1,
      title: '7 Public Open-Source Repositories',
      category: 'Open Source',
      icon: 'fa-brands fa-github',
      gradient: 'from-indigo-600 to-cyan-600',
      description:
        'Engineered and published seven end-to-end applications on GitHub ranging from JWT-authenticated productivity platforms to computer vision and cryptography web tools.',
      stat: '7 Projects',
      statLabel: 'Public Repos'
    },
    {
      id: 2,
      title: '~97.85% Benchmark ML Accuracy',
      category: 'Machine Learning',
      icon: 'fa-solid fa-chart-line',
      gradient: 'from-emerald-500 to-teal-600',
      description:
        'Trained and evaluated a high-precision SMS Spam Classifier utilizing CountVectorizer and Multinomial Naive Bayes, successfully deployed to production via Streamlit.',
      stat: '97.85%',
      statLabel: 'Test Accuracy'
    },
    {
      id: 3,
      title: 'Full-Stack & Mobile Degree Specialisation',
      category: 'Academic Track',
      icon: 'fa-solid fa-laptop-code',
      gradient: 'from-blue-600 to-indigo-700',
      description:
        'Selected for the specialised software engineering track at Rajarata University of Sri Lanka, focusing on production web architectures and cross-platform mobile computing.',
      stat: 'RUSL',
      statLabel: 'BSc (ICT)'
    },
    {
      id: 4,
      title: 'Physical Science Mathematical Foundation',
      category: 'G.C.E. A/L',
      icon: 'fa-solid fa-atom',
      gradient: 'from-purple-600 to-pink-600',
      description:
        'Achieved dual B grades in Combined Mathematics and Physics, providing rigorous grounding in algorithms, numerical logic, and computational problem-solving.',
      stat: 'Double B',
      statLabel: 'Maths & Physics'
    }
  ]

  const softSkills = [
    {
      name: 'Analytical Problem-Solving',
      icon: 'fa-solid fa-magnifying-glass-chart',
      desc: 'Systematic debugging and logical decomposition of complex architectural challenges.'
    },
    {
      name: 'Self-Learning & Adaptability',
      icon: 'fa-solid fa-brain',
      desc: 'Swiftly acquiring and implementing new frameworks, libraries, and language paradigms.'
    },
    {
      name: 'Teamwork & Collaboration',
      icon: 'fa-solid fa-users-gear',
      desc: 'Proven team player in collaborative environments such as the Opal Muse e-commerce group project.'
    },
    {
      name: 'Clear Communication',
      icon: 'fa-solid fa-comments',
      desc: 'Articulating technical decisions, API structures, and architectural choices clearly.'
    },
    {
      name: 'Time Management',
      icon: 'fa-regular fa-clock',
      desc: 'Prioritizing features, managing sprint commitments, and delivering projects promptly.'
    },
    {
      name: 'Attention to Detail',
      icon: 'fa-solid fa-bullseye',
      desc: 'Ensuring rigorous edge-case handling, aesthetic UI precision, and robust input validation.'
    }
  ]

  return (
    <section id="achievements" className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 reveal-on-scroll">
      {/* Ambient Glow Accent */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            HONORS & SOFT SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Milestones & Strengths
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-2xl mx-auto">
            Key professional milestones, open-source accomplishments, and core interpersonal competencies
          </p>
        </div>

        {/* Milestones 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="glass-panel glass-card-glow rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_15px_30px_rgba(103,232,249,0.15)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${m.gradient} flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <i className={m.icon}></i>
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/50 border border-cyan-400/20 px-2.5 py-1 rounded-full">
                    {m.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold font-orbitron text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-300/80 leading-relaxed mb-6">
                  {m.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cyan-400/10 flex items-baseline justify-between">
                <span className="text-xl sm:text-2xl font-extrabold font-orbitron bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  {m.stat}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {m.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-400/20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-semibold text-cyan-300 tracking-[2px] uppercase">
              PROFESSIONAL WORK ETHIC
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-orbitron text-white mt-1">
              Core Interpersonal & Soft Skills
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Essential attributes ensuring smooth team collaboration, agile adaptation, and deliverable quality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#081222]/80 border border-cyan-400/15 rounded-2xl p-5 hover:border-cyan-400/40 hover:bg-cyan-950/20 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-base shrink-0 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <i className={s.icon}></i>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold font-orbitron text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {s.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
