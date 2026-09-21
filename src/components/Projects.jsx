import React, { useState } from 'react'

const PROJECTS = [
  {
    id: 1,
    title: 'EffortGrid – Daily Effort Tracker',
    category: 'fullstack',
    badge: 'Full-Stack • Productivity',
    badgeColor: 'bg-indigo-600/80 border-indigo-400/40 text-indigo-200',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    description:
      'Full-stack productivity web app featuring slot-based time tracking (15-minute units), timer controls, todo management, and an analytics dashboard with interactive growth charts powered by Recharts.',
    highlights: [
      'Built JWT-secured login & protected REST API endpoints',
      'Interactive growth charts with Recharts & slot-based logging',
      'Modern glassmorphism UI with responsive Tailwind layouts'
    ],
    tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Recharts'],
    githubUrl: 'https://github.com/Piyumanjalee/EffortGrid',
    demoUrl: 'https://github.com/Piyumanjalee/EffortGrid'
  },
  {
    id: 2,
    title: 'CipherEdu – Interactive Cryptography Studio',
    category: 'fullstack',
    badge: 'Full-Stack • Cybersecurity',
    badgeColor: 'bg-cyan-600/80 border-cyan-400/40 text-cyan-200',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description:
      'Educational cybersecurity platform to visualise and practise Caesar, Vigenère, Atbash, Rail Fence ciphers and Base64 with real-time encrypt/decrypt visual representations.',
    highlights: [
      'FastAPI + Pydantic REST backend with auto-generated Swagger docs',
      'Fully responsive dark-mode React interface with algorithm deep-dive cards',
      'Real-time encrypt and decrypt computations across multiple classic ciphers'
    ],
    tags: ['React 19', 'Vite', 'Tailwind CSS v4', 'Python', 'FastAPI', 'Pydantic', 'Swagger'],
    githubUrl: 'https://github.com/Piyumanjalee/Cipher-Edu-App',
    demoUrl: 'https://github.com/Piyumanjalee/Cipher-Edu-App'
  },
  {
    id: 3,
    title: 'Face Mask & Safety Helmet Detection',
    category: 'ai',
    badge: 'Deep Learning • Computer Vision',
    badgeColor: 'bg-amber-600/80 border-amber-400/40 text-amber-200',
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
    description:
      'Deep learning computer vision system utilizing MobileNetV2 transfer learning to detect face masks and safety helmets in real time for industrial safety and security compliance in restricted zones.',
    highlights: [
      'MobileNetV2 transfer learning architecture optimized for edge inference',
      'Multi-class detection for both face masks and industrial safety helmets',
      'Designed for occupational health and automated site safety auditing'
    ],
    tags: ['Python', 'Deep Learning', 'MobileNetV2', 'TensorFlow/Keras', 'OpenCV'],
    githubUrl: 'https://github.com/Piyumanjalee/Face-Mask-and-Helmet-Detection',
    demoUrl: 'https://github.com/Piyumanjalee/Face-Mask-and-Helmet-Detection'
  },
  {
    id: 4,
    title: 'SMS Spam Classifier',
    category: 'ai',
    badge: 'Machine Learning • Streamlit',
    badgeColor: 'bg-emerald-600/80 border-emerald-400/40 text-emerald-200',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description:
      'Natural Language Processing pipeline and interactive web app for filtering spam messages. Trained on the SMS Spam Collection dataset using CountVectorizer and Naive Bayes, achieving ~97.85% test accuracy.',
    highlights: [
      'Achieved ~97.85% classification accuracy on benchmark dataset',
      'CountVectorizer feature extraction and Multinomial Naive Bayes classifier',
      'Deployed as an accessible, interactive Streamlit cloud web application'
    ],
    tags: ['Python', 'scikit-learn', 'Pandas', 'Naive Bayes', 'Streamlit', '~97.85% Acc'],
    githubUrl: 'https://github.com/Piyumanjalee/SMS-Spam-Classifier',
    demoUrl: 'https://github.com/Piyumanjalee/SMS-Spam-Classifier'
  },
  {
    id: 5,
    title: 'PassportPix – Passport Photo Maker',
    category: 'tools',
    badge: 'Frontend Tool • PDF/Docx Export',
    badgeColor: 'bg-purple-600/80 border-purple-400/40 text-purple-200',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description:
      'Client-side web utility to crop personal portrait photos to standard official passport dimensions and export print-ready multi-photo layout sheets directly as PDF or Word (.docx) documents.',
    highlights: [
      'Client-side photo cropping to exact passport dimensions (react-image-crop)',
      'Dynamic multi-grid print sheet generation for immediate studio printing',
      'Direct client-side document export via jsPDF and docx libraries'
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'react-image-crop', 'jsPDF', 'docx'],
    githubUrl: 'https://github.com/Piyumanjalee/passportpix',
    demoUrl: 'https://github.com/Piyumanjalee/passportpix'
  },
  {
    id: 6,
    title: 'Opal Muse – Clothing E-commerce',
    category: 'fullstack',
    badge: 'PHP & MySQL • Group Project',
    badgeColor: 'bg-rose-600/80 border-rose-400/40 text-rose-200',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    description:
      'Collaborative e-commerce online clothing store featuring customer registration and authentication, dynamic product catalog, shopping cart, interactive checkout, and return & exchange request handling.',
    highlights: [
      'Full-stack architecture backed by PHP server scripts and MySQL relational database',
      'Complete shopping lifecycle: catalog, cart, checkout, returns & exchanges',
      'Robust client-side JavaScript form validation and responsive layout design'
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Group Project'],
    githubUrl: 'https://github.com/Piyumanjalee/OpalMuse-Web-site',
    demoUrl: 'https://github.com/Piyumanjalee/OpalMuse-Web-site'
  },
  {
    id: 7,
    title: 'Mini Sudoku – Interactive Web Game',
    category: 'tools',
    badge: 'React 19 • Game & Logic',
    badgeColor: 'bg-teal-600/80 border-teal-400/40 text-teal-200',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80',
    description:
      'Engaging browser Sudoku game built with React 19 featuring selectable difficulty levels, game timer, undo move history, custom touch/click number pad, persistent localStorage, and celebratory confetti effects.',
    highlights: [
      'Multiple algorithmic difficulty tiers and automatic conflict detection',
      'Move history undo stack, active timer, and saved progress state (localStorage)',
      'Smooth animations and celebratory confetti completion celebrations'
    ],
    tags: ['React 19', 'Vite', 'Tailwind CSS v4', 'localStorage', 'Confetti FX'],
    githubUrl: 'https://github.com/Piyumanjalee/mini-sudoku',
    demoUrl: 'https://github.com/Piyumanjalee/mini-sudoku'
  }
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterOptions = [
    { label: 'All Projects (7)', value: 'all' },
    { label: 'Full-Stack & Web', value: 'fullstack' },
    { label: 'AI & Machine Learning', value: 'ai' },
    { label: 'Frontend & Utilities', value: 'tools' }
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 reveal-on-scroll">
      {/* Background Accent */}
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-2xl mx-auto">
            Explore all 7 public open-source projects across full-stack web architectures, machine learning models, and utility tools
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-1.5 rounded-2xl flex flex-wrap items-center justify-center gap-1.5 border border-cyan-400/20 shadow-lg">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-slate-400">
              <i className="fa-solid fa-filter text-cyan-400 text-[10px]"></i> Filter:
            </span>
            {filterOptions.map((tab) => {
              const isActive = activeFilter === tab.value
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs font-orbitron font-semibold tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_18px_rgba(103,232,249,0.3)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-card-glow rounded-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_25px_rgba(103,232,249,0.2)] transition-all duration-500"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-48 overflow-hidden bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover sepia-contrast-img group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081222] via-[#081222]/30 to-transparent"></div>

                  {/* Badge */}
                  <span className={`absolute top-3.5 left-3.5 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full uppercase border shadow-sm ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold font-orbitron text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-1.5 mb-5 pb-4 border-b border-cyan-400/10">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <i className="fa-solid fa-angle-right text-cyan-400 text-[10px] mt-0.5 shrink-0"></i>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium bg-cyan-950/50 text-cyan-300 border border-cyan-400/20 rounded-md px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-cyan-400/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 border border-cyan-400/30 hover:border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-400/10 text-center font-orbitron font-bold text-[10px] tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-brands fa-github text-xs"></i>
                    <span>Repository</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-sheen py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-center font-orbitron font-bold text-[10px] tracking-wider uppercase rounded-xl transition-all shadow-[0_4px_15px_rgba(79,70,229,0.3)] hover:shadow-[0_4px_20px_rgba(103,232,249,0.4)] flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
