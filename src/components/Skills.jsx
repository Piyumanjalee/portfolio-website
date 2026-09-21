import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fa-solid fa-code',
      gradient: 'from-cyan-500 to-blue-600',
      description: 'Building ultra-responsive, component-driven interfaces with modern frameworks and styling paradigms.',
      skills: [
        { name: 'React 19', level: 'Advanced' },
        { name: 'Tailwind CSS (v4)', level: 'Advanced' },
        { name: 'Vite', level: 'Proficient' },
        { name: 'React Router', level: 'Proficient' },
        { name: 'Recharts', level: 'Intermediate' },
        { name: 'HTML5 & CSS3', level: 'Expert' },
        { name: 'Glassmorphism UI', level: 'Advanced' },
        { name: 'Responsive Web Design', level: 'Expert' }
      ]
    },
    {
      title: 'Backend & RESTful APIs',
      icon: 'fa-solid fa-server',
      gradient: 'from-indigo-600 to-purple-600',
      description: 'Designing performant, scalable server architectures, secure endpoints, and schema-validated microservices.',
      skills: [
        { name: 'Node.js', level: 'Advanced' },
        { name: 'Express.js', level: 'Advanced' },
        { name: 'FastAPI (Python)', level: 'Advanced' },
        { name: 'RESTful API Design', level: 'Advanced' },
        { name: 'JWT Authentication', level: 'Proficient' },
        { name: 'Pydantic & Schemas', level: 'Proficient' },
        { name: 'Swagger / OpenAPI', level: 'Proficient' },
        { name: 'PHP', level: 'Proficient' }
      ]
    },
    {
      title: 'Languages & Core Stack',
      icon: 'fa-solid fa-terminal',
      gradient: 'from-emerald-500 to-teal-700',
      description: 'Writing clean, idiomatic, and maintainable code across diverse server and client paradigms.',
      skills: [
        { name: 'JavaScript (ES6+)', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'PHP', level: 'Proficient' },
        { name: 'SQL', level: 'Proficient' },
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS3', level: 'Expert' }
      ]
    },
    {
      title: 'Databases & State',
      icon: 'fa-solid fa-database',
      gradient: 'from-blue-600 to-indigo-700',
      description: 'Managing relational and document data storage, schema migrations, and indexing strategies.',
      skills: [
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Mongoose ODM', level: 'Advanced' },
        { name: 'MySQL', level: 'Proficient' },
        { name: 'Database Normalization', level: 'Proficient' },
        { name: 'localStorage State', level: 'Advanced' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: 'fa-solid fa-brain',
      gradient: 'from-amber-500 to-rose-600',
      description: 'Applying predictive algorithms, NLP models, and computer vision transfer learning to real-world datasets.',
      skills: [
        { name: 'scikit-learn', level: 'Proficient' },
        { name: 'MobileNetV2 (Transfer)', level: 'Applied' },
        { name: 'TensorFlow / Keras', level: 'Applied' },
        { name: 'Naive Bayes Classifier', level: 'Proficient' },
        { name: 'Pandas & Data Cleaning', level: 'Proficient' },
        { name: 'Streamlit Deployment', level: 'Advanced' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: 'fa-solid fa-mobile-screen',
      gradient: 'from-sky-500 to-cyan-700',
      description: 'Engineering responsive, cross-platform mobile experiences for Android and multi-platform devices.',
      skills: [
        { name: 'Flutter', level: 'Foundational' },
        { name: 'Android Development', level: 'Foundational' },
        { name: 'React Native', level: 'Foundational' },
        { name: 'Mobile UX Guidelines', level: 'Proficient' }
      ]
    },
    {
      title: 'Tools, DevOps & Practices',
      icon: 'fa-solid fa-screwdriver-wrench',
      gradient: 'from-fuchsia-600 to-pink-600',
      description: 'Employing industry best practices, modern developer tools, and validation pipelines for software delivery.',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Postman API Testing', level: 'Advanced' },
        { name: 'npm Ecosystem', level: 'Advanced' },
        { name: 'XAMPP / WAMP', level: 'Proficient' },
        { name: 'Client & Server Validation', level: 'Advanced' },
        { name: 'AI-Assisted Development', level: 'Advanced' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#07111f] border-t border-cyan-400/10 reveal-on-scroll">
      {/* Ambient Glow Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono font-semibold text-cyan-300 tracking-[3px] uppercase mb-3 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 mt-2 max-w-2xl mx-auto">
            Categorized breakdown of programming languages, modern frameworks, APIs, databases, and developer toolchains
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-card-glow rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_15px_35px_rgba(2,10,24,0.6)] transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${cat.gradient} flex items-center justify-center text-white text-lg shadow-md shrink-0`}>
                    <i className={cat.icon}></i>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-orbitron text-white leading-snug">
                      {cat.title}
                    </h3>
                    <span className="text-[10px] font-mono text-cyan-300">
                      {cat.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative flex items-center justify-between gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#081222]/90 border border-cyan-400/15 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all text-xs"
                    >
                      <span className="font-mono text-slate-200 text-[11px] group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Subtle Line */}
              <div className="mt-5 pt-3 border-t border-cyan-400/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Verified by Projects</span>
                <i className="fa-solid fa-circle-check text-cyan-400/60"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
