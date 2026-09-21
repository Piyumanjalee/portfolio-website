import React, { useState, useRef, useEffect } from 'react'

const RESPONSES = {
  skills:
    'S. H. M. P. K. Senadheera is proficient in JavaScript (ES6+), Python, PHP, SQL, HTML5, and CSS3. Her primary frontend stack includes React 19, Vite, and Tailwind CSS. On the backend, she specializes in Node.js/Express and FastAPI (Python) with JWT and Swagger. She also works with MongoDB, MySQL, Flutter, Android, and Machine Learning (scikit-learn, MobileNetV2).',
  projects:
    'Piyumanjalee has 7 public GitHub projects: 1) EffortGrid (Full-stack productivity tracker with React, Node, MongoDB & Recharts), 2) CipherEdu (Interactive cryptography studio with FastAPI & React 19), 3) Face Mask & Helmet Detection (MobileNetV2 transfer learning), 4) SMS Spam Classifier (Naive Bayes with ~97.85% accuracy on Streamlit), 5) PassportPix (Passport photo maker), 6) Opal Muse (PHP & MySQL clothing e-commerce), and 7) Mini Sudoku (React 19 game).',
  education:
    'Piyumanjalee is an undergraduate (2023 – 2027) pursuing a Bachelor of Science in Information and Communication Technology at Rajarata University of Sri Lanka, specialising in Full-Stack Development & Mobile Development. She completed her G.C.E. Advanced Level in the Physical Science Stream with B in Combined Maths, B in Physics, and C in Chemistry.',
  work:
    'Piyumanjalee is actively seeking an internship or junior software engineering role to build clean, user-focused products. She has built 7 comprehensive open-source GitHub projects and has collaborative full-stack web engineering experience.',
  contact:
    'You can reach Piyumanjalee directly via email at kpiyumanjalee2002@gmail.com or by phone/WhatsApp at +94 75 639 5636. You can also connect on LinkedIn (linkedin.com/in/piyumanjalee-kavindi-senadheera) or GitHub (github.com/Piyumanjalee)!',
  hire:
    'Yes! Piyumanjalee is actively looking for internship or junior software engineering opportunities in full-stack web, backend, mobile, or applied machine learning roles. Feel free to use the contact form or email kpiyumanjalee2002@gmail.com!',
  default:
    'Thanks for reaching out! You can ask about skills, her 7 projects, education at Rajarata University, or how to contact and hire Piyumanjalee. Feel free to click the quick tabs below!'
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: "Hi there! I am Piyumanjalee Senadheera's portfolio assistant. Ask me anything about her skills, 7 GitHub projects, education at Rajarata University, or internship availability!",
      time: 'Ready'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isTyping, isOpen])

  const getAssistantReply = (userQuery) => {
    const q = userQuery.toLowerCase()
    if (q.includes('skill') || q.includes('tool') || q.includes('stack') || q.includes('tech') || q.includes('language')) {
      return RESPONSES.skills
    }
    if (q.includes('project') || q.includes('portfolio') || q.includes('effortgrid') || q.includes('cipher') || q.includes('spam') || q.includes('sudoku') || q.includes('passportpix') || q.includes('opal')) {
      return RESPONSES.projects
    }
    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('rajarata') || q.includes('al') || q.includes('a/l')) {
      return RESPONSES.education
    }
    if (q.includes('work') || q.includes('experience') || q.includes('job') || q.includes('career') || q.includes('trajectory')) {
      return RESPONSES.work
    }
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('phone') || q.includes('whatsapp') || q.includes('message')) {
      return RESPONSES.contact
    }
    if (q.includes('hire') || q.includes('intern') || q.includes('open') || q.includes('opportunity') || q.includes('recruit')) {
      return RESPONSES.hire
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return "Hello there! Glad to have you here. What would you like to know about Piyumanjalee's portfolio or projects?"
    }
    return RESPONSES.default
  }

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim()
    if (!text) return

    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text, time: timeStr }])
    if (!textToSend) setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      setIsTyping(false)
      const reply = getAssistantReply(text)
      setMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ])
    }, 1000)
  }

  const handleChipClick = (prompt) => {
    handleSendMessage(prompt)
  }

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 border border-cyan-400/40 flex items-center justify-center shadow-[0_8px_30px_rgba(79,70,229,0.5)] hover:shadow-[0_10px_35px_rgba(103,232,249,0.5)] transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer focus:outline-none"
        aria-label="Toggle AI Assistant Chat"
      >
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#07111f] animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#07111f]"></div>

        {isOpen ? (
          <i className="fa-solid fa-xmark text-xl text-white"></i>
        ) : (
          <i className="fa-solid fa-robot text-xl text-white group-hover:scale-110 transition-transform"></i>
        )}
      </button>

      {/* Chat Dialog Drawer */}
      {isOpen && (
        <div className="chat-window absolute bottom-18 right-0 w-[320px] sm:w-[370px] h-[500px] max-h-[80vh] flex flex-col bg-[#07111f]/95 backdrop-blur-2xl border border-cyan-400/25 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(103,232,249,0.15)] overflow-hidden z-50">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-indigo-600/90 to-cyan-600/90 text-white flex items-center justify-between border-b border-cyan-400/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 text-white shadow-inner">
                <i className="fa-solid fa-robot text-sm"></i>
              </div>
              <div className="flex flex-col">
                <h4 className="text-xs font-bold font-orbitron text-white tracking-wider">
                  Portfolio Assistant
                </h4>
                <span className="text-[10px] font-mono text-cyan-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online & Ready
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close Chat"
            >
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#050c17]/70 flex flex-col gap-3.5">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-br-none'
                      : 'glass-panel text-slate-200 border border-cyan-400/20 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
                <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="self-start glass-panel border border-cyan-400/20 rounded-2xl rounded-bl-none p-3 flex gap-1.5 items-center">
                <span className="typing-dot w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="typing-dot w-2 h-2 rounded-full bg-cyan-400"></span>
                <span className="typing-dot w-2 h-2 rounded-full bg-cyan-400"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-3 bg-[#07111f]/90 border-t border-cyan-400/10 flex flex-wrap gap-1.5 select-none">
            {['Skills & Stack', 'All 7 Projects', 'Education / RUSL', 'Hire / Internship'].map((chip) => (
              <button
                key={chip}
                onClick={() => handleChipClick(chip)}
                className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-cyan-950/40 hover:bg-cyan-400/15 border border-cyan-400/20 hover:border-cyan-400/50 text-cyan-300 transition-all cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="p-3 bg-[#081222] border-t border-cyan-400/15 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about my work..."
              className="flex-1 bg-[#050c17] border border-cyan-400/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-9 h-9 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 flex items-center justify-center text-white transition-all shadow-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
