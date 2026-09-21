import React from 'react'

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information and Communication Technology',
      shortDegree: 'BSc (ICT) Undergraduate',
      period: '2023 – 2027 (Expected)',
      institution: 'Rajarata University of Sri Lanka',
      specialisation: 'Full-Stack Development & Mobile Development',
      status: 'In Progress',
      statusColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
      icon: 'fa-solid fa-graduation-cap',
      iconGradient: 'from-indigo-600 to-cyan-500',
      description:
        'Pursuing an honours-level ICT degree with dedicated specialisation in building production-grade web applications, cross-platform mobile architectures, database management systems, and intelligent machine learning algorithms.',
      highlights: [
        'Specialisation: Full-Stack Development & Mobile Computing',
        'Built 7 public GitHub projects covering React 19, FastAPI, Node.js & Machine Learning',
        'Strong hands-on coursework in Data Structures, RESTful APIs, OOP, and Relational & NoSQL Databases'
      ],
      tags: ['React 19', 'FastAPI', 'Node.js', 'Mobile Development', 'MongoDB', 'MySQL', 'Python']
    },
    {
      id: 2,
      degree: 'G.C.E. Advanced Level Examination',
      shortDegree: 'Physical Science Stream',
      period: 'Completed',
      institution: 'Ministry of Education, Sri Lanka',
      specialisation: 'Mathematics, Physics & Chemistry',
      status: 'Completed',
      statusColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
      icon: 'fa-solid fa-atom',
      iconGradient: 'from-cyan-600 to-blue-600',
      description:
        'Successfully completed Advanced Level studies in the Physical Science stream, establishing an enduring analytical mindset, strong mathematical logic, and systematic scientific problem-solving capability.',
      highlights: [
        'Combined Mathematics: Grade B',
        'Physics: Grade B',
        'Chemistry: Grade C'
      ],
      tags: ['Combined Mathematics (B)', 'Physics (B)', 'Chemistry (C)', 'Analytical Logic']
    }
  ]

  return (
    <section id="education" className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 reveal-on-scroll">
      {/* Ambient Glow Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-xl mx-auto">
            My academic degrees, university specialisation, and scientific foundation
          </p>
        </div>

        {/* Education Timeline Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-card-glow rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-cyan-400/20 hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_15px_35px_rgba(2,10,24,0.5)]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${item.iconGradient} flex items-center justify-center text-white text-xl sm:text-2xl shadow-md shrink-0`}>
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-300 font-semibold uppercase tracking-wider block">
                        {item.period}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-orbitron text-white leading-snug">
                        {item.shortDegree}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.statusColor} shrink-0`}>
                    {item.status}
                  </span>
                </div>

                {/* Institution & Specialisation */}
                <div className="mb-4 pb-4 border-b border-cyan-400/10">
                  <div className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                    <i className="fa-solid fa-building-columns text-cyan-400 text-xs"></i>
                    <span>{item.institution}</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-300/90 mt-1 flex items-center gap-2">
                    <i className="fa-solid fa-bookmark text-indigo-400 text-[10px]"></i>
                    <span>{item.specialisation}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="mb-6 space-y-2">
                  <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Key Highlights:
                  </h4>
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <i className="fa-solid fa-check text-cyan-400 text-[11px] mt-0.5 shrink-0"></i>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-cyan-400/10">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono bg-cyan-950/40 border border-cyan-400/20 text-cyan-300 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
