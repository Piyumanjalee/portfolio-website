import React from 'react'
import profileImg from '../../profile.png'

const SKILLS = [
  { name: 'React 19', icon: 'fa-brands fa-react', color: 'text-cyan-400' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-emerald-400' },
  { name: 'FastAPI', icon: 'fa-solid fa-bolt', color: 'text-teal-400' },
  { name: 'Python', icon: 'fa-brands fa-python', color: 'text-yellow-300' },
  { name: 'PHP', icon: 'fa-brands fa-php', color: 'text-indigo-400' },
  { name: 'MongoDB', icon: 'fa-solid fa-leaf', color: 'text-emerald-500' },
  { name: 'MySQL', icon: 'fa-solid fa-database', color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: 'text-cyan-300' },
  { name: 'Flutter', icon: 'fa-solid fa-mobile-screen', color: 'text-sky-400' },
  { name: 'React Native', icon: 'fa-brands fa-react', color: 'text-cyan-300' },
  { name: 'MobileNetV2', icon: 'fa-solid fa-brain', color: 'text-amber-400' },
  { name: 'scikit-learn', icon: 'fa-solid fa-chart-line', color: 'text-orange-400' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-git-alt', color: 'text-rose-400' },
]

export default function About() {
  const stats = [
    { value: '7', label: 'GitHub Projects' },
    { value: '2023–27', label: 'BSc (ICT) RUSL' },
    { value: '~97.8%', label: 'ML Accuracy' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#07111f] reveal-on-scroll">
      {/* Subtle Background Mesh Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Discover my journey, skills & tech stack
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/30 to-cyan-400/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-2 border-cyan-400/40 p-2 bg-[#081222]/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] transform group-hover:scale-[1.02] group-hover:border-cyan-300 transition-all duration-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={profileImg}
                    alt="S. H. M. P. K. Senadheera"
                    className="w-full h-full object-cover object-center sepia-contrast-img group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Quick Stats */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-sm sm:text-base leading-relaxed text-slate-300/90 mb-4">
              Hello! I am <span className="text-cyan-300 font-bold">Piyumanjalee Kavindi</span> (S. H. M. P. K. Senadheera), an Information and Communication Technology undergraduate (2023 – 2027) at <span className="text-white font-semibold">Rajarata University of Sri Lanka</span>, specialising in <span className="text-cyan-300 font-semibold">Full-Stack Development & Mobile Development</span>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300/90 mb-4">
              I have practical experience engineering complete web applications using modern stacks like <span className="text-white">React 19, Node.js/Express, FastAPI, PHP, and MongoDB/MySQL</span>, as well as applying machine learning algorithms (scikit-learn, MobileNetV2 transfer learning) to real-world challenges.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300/90 mb-8">
              With <span className="text-cyan-300 font-semibold">7 public projects on GitHub</span>, I am driven by building clean, accessible, and user-focused digital products. I am currently seeking an <span className="text-white font-semibold">internship or junior software engineering role</span> to contribute to high-performing teams.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-card-glow rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-orbitron bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Slider Section (Infinite Rolling Track) */}
        <div className="mt-8 pt-8 border-t border-cyan-400/10">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white tracking-widest uppercase">
              Technical Stack
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* Sliding Carousel Wrapper */}
          <div className="w-full overflow-hidden py-4 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="skills-track flex gap-6">
              {/* Duplicate array twice for smooth infinite loop */}
              {[...SKILLS, ...SKILLS].map((skill, index) => (
                <div
                  key={index}
                  className="glass-panel shrink-0 flex flex-col items-center justify-center gap-3 py-5 px-7 rounded-2xl min-w-[135px] min-h-[115px] transform hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_10px_25px_rgba(103,232,249,0.15)] transition-all duration-300 group cursor-default"
                >
                  <i className={`${skill.icon} text-3xl sm:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}></i>
                  <span className="text-xs font-semibold font-mono text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
