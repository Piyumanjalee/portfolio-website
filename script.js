// Portfolio Website Interactivity Logic

function initAll() {
  if (window.__PORTFOLIO_INIT_DONE) return;
  window.__PORTFOLIO_INIT_DONE = true;
  initTypingEffect();
  initMobileMenu();
  initScrollSpy();
  initSkillsCarousel();
  initReadMoreToggles();
  initProjectFilters();
  initContactForm();
  initChatAssistant();
}

// Expose initializer so the React app can call it after mounting
window.__PORTFOLIO_INIT = initAll;

/* ==========================================================================
   1. Dynamic Typing Effect (Hero Section)
   ========================================================================== */
function initTypingEffect() {
  const targetElement = document.getElementById('typing-text');
  if (!targetElement) return;

  const roles = [
    'Software Developer',
    'Android Specialist',
    'AI Engineer',
    'UI/UX Designer'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 150;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      delay = 75; // Faster deletion
    } else {
      targetElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      delay = 150; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full text
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 500; // Pause before typing next word
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   2. Mobile Navigation Menu
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navList = document.getElementById('nav-list');
  const navLinks = document.querySelectorAll('.nav-item');

  if (!menuBtn || !navList) return;

  // Toggle mobile menu
  menuBtn.addEventListener('click', () => {
    navList.classList.toggle('hidden');
    navList.classList.toggle('flex');
    navList.classList.toggle('flex-col');
    navList.classList.toggle('absolute');
    navList.classList.toggle('top-full');
    navList.classList.toggle('left-0');
    navList.classList.toggle('w-full');
    navList.classList.toggle('bg-bgMain/95');
    navList.classList.toggle('backdrop-blur-md');
    navList.classList.toggle('border-b');
    navList.classList.toggle('border-glass-border');
    navList.classList.toggle('p-6');
    navList.classList.toggle('gap-4');
    
    // Toggle hamburger icon animation or text if any
    const bars = menuBtn.querySelectorAll('.menu-bar');
    if (bars.length >= 3) {
      bars[0].classList.toggle('rotate-45');
      bars[0].classList.toggle('translate-y-2');
      bars[1].classList.toggle('opacity-0');
      bars[2].classList.toggle('-rotate-45');
      bars[2].classList.toggle('-translate-y-2');
    }
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (!navList.classList.contains('hidden')) {
        menuBtn.click();
      }
    });
  });
}

/* ==========================================================================
   3. ScrollSpy & Navigation Highlighting
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-item');

  if (sections.length === 0 || navItems.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        
        navItems.forEach(item => {
          item.classList.remove('active', 'text-primary');
          item.classList.add('text-textSec');
          
          if (item.getAttribute('href') === `#${activeId}`) {
            item.classList.add('active', 'text-primary');
            item.classList.remove('text-textSec');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   4. Infinite Skills Carousel Track Duplication
   ========================================================================== */
function initSkillsCarousel() {
  const track = document.getElementById('skills-track');
  if (!track) return;

  // Clone track contents to make the loop seamless
  const children = Array.from(track.children);
  children.forEach(child => {
    const clone = child.cloneNode(true);
    track.appendChild(clone);
  });
}

/* ==========================================================================
   5. Read-More / Collapsible Content Toggles
   ========================================================================== */
function initReadMoreToggles() {
  const toggles = document.querySelectorAll('.expand-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      
      if (!targetContent) return;

      const isExpanded = targetContent.classList.contains('expanded');
      
      if (isExpanded) {
        targetContent.classList.remove('expanded');
        targetContent.classList.add('collapsed');
        toggle.querySelector('.toggle-text').textContent = 'Read More';
        const icon = toggle.querySelector('.toggle-icon');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        targetContent.classList.add('expanded');
        targetContent.classList.remove('collapsed');
        toggle.querySelector('.toggle-text').textContent = 'Show Less';
        const icon = toggle.querySelector('.toggle-icon');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/* ==========================================================================
   6. Project Filtering System
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length === 0 || projectCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle Active Button Style
      filterBtns.forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-cardBg', 'text-textColor'));
      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('bg-cardBg', 'text-textColor');

      const filterValue = btn.getAttribute('data-filter');

      // Filter Cards
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Custom animated fade filters
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   7. Contact Form Visual Validation & Mock Submit
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('form-success-msg');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Visual loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin h-5 w-5 text-white mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    `;

    // Simulate Network Request Delay
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      
      // Reset Form
      form.reset();

      // Show Success Message
      if (successMsg) {
        successMsg.classList.remove('hidden');
        successMsg.textContent = 'Thank you! Your message has been sent successfully.';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successMsg.classList.add('hidden');
        }, 5000);
      }
    }, 1800);
  });
}

/* ==========================================================================
   8. Premium Feature: Interactive Mock AI Chat Assistant
   ========================================================================== */
function initChatAssistant() {
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatMessages = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chips = document.querySelectorAll('.prompt-chip');

  if (!chatToggle || !chatWindow || !closeChat || !chatMessages || !chatForm || !chatInput) return;

  // Toggle chat widget opening
  chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    chatToggle.classList.toggle('open');
    chatInput.focus();
    scrollToBottom();
  });

  // Close widget
  closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
    chatToggle.classList.remove('open');
  });

  // Handle Form Submit
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = chatInput.value.trim();
    if (!messageText) return;

    // Append User Message
    appendMessage(messageText, 'user');
    chatInput.value = '';

    // Simulate typing and response
    simulateAssistantResponse(messageText);
  });

  // Click on quick questions
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.textContent.trim();
      appendMessage(promptText, 'user');
      simulateAssistantResponse(promptText);
    });
  });

  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender} max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm`;
    
    if (sender === 'user') {
      msgDiv.classList.add('self-end', 'bg-primary', 'text-white', 'rounded-br-none');
    } else {
      msgDiv.classList.add('self-start', 'bg-textColor/10', 'text-textColor', 'border', 'border-glass-border', 'rounded-bl-none');
    }

    const p = document.createElement('p');
    p.textContent = text;
    msgDiv.appendChild(p);

    const time = document.createElement('span');
    time.className = `timestamp text-[10px] block mt-1 opacity-60 ${sender === 'user' ? 'text-right text-white/80' : 'text-left'}`;
    const now = new Date();
    time.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    msgDiv.appendChild(time);

    chatMessages.appendChild(msgDiv);
    scrollToBottom();
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function simulateAssistantResponse(userMsg) {
    // Show typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'typing-indicator';
    typingIndicator.className = 'self-start bg-textColor/10 border border-glass-border rounded-2xl rounded-bl-none p-3 flex gap-1 items-center max-w-[80px]';
    typingIndicator.innerHTML = `
      <span class="typing-dot w-2 h-2 rounded-full bg-primaryLight"></span>
      <span class="typing-dot w-2 h-2 rounded-full bg-primaryLight"></span>
      <span class="typing-dot w-2 h-2 rounded-full bg-primaryLight"></span>
    `;
    chatMessages.appendChild(typingIndicator);
    scrollToBottom();

    // Responses Database
    const responses = {
      skills: "John Doe is skilled in Java, Kotlin, Python, React, and SQL. He specializes in Android App Development and Machine Learning (TensorFlow).",
      projects: "John has built premium projects, including Foodora (a complete food ordering Android app) and Project Sentinel (an automated vulnerability detection script). Check out the Projects section!",
      work: "John has worked as an Associate Software Engineer at Techcorp Solutions and completed an internship at Innovate Labs. Check his experience section for details!",
      contact: "You can reach out to John by filling out the form in the Contact section, or via email directly at john.doe@email.com. He usually replies within 24 hours.",
      hire: "John is currently open for contract work, full-time positions, and freelance gigs! Send a message via the contact form to discuss opportunities.",
      default: "Thanks for checking out my portfolio! You can ask me about my skills, projects, work experience, or how to get in touch. Feel free to use the quick tabs below!"
    };

    let reply = responses.default;
    const msgLower = userMsg.toLowerCase();

    if (msgLower.includes('skill') || msgLower.includes('tool') || msgLower.includes('stack')) {
      reply = responses.skills;
    } else if (msgLower.includes('project') || msgLower.includes('portfolio') || msgLower.includes('app') || msgLower.includes('sentinel')) {
      reply = responses.projects;
    } else if (msgLower.includes('work') || msgLower.includes('experience') || msgLower.includes('job') || msgLower.includes('career')) {
      reply = responses.work;
    } else if (msgLower.includes('contact') || msgLower.includes('email') || msgLower.includes('phone') || msgLower.includes('message')) {
      reply = responses.contact;
    } else if (msgLower.includes('hire') || msgLower.includes('open to work') || msgLower.includes('recruit') || msgLower.includes('opportunity')) {
      reply = responses.hire;
    } else if (msgLower.includes('hello') || msgLower.includes('hi') || msgLower.includes('hey')) {
      reply = "Hello there! I am John Doe's Portfolio Assistant. How can I help you today?";
    }

    setTimeout(() => {
      // Remove typing indicator
      const indicator = document.getElementById('typing-indicator');
      if (indicator) indicator.remove();

      appendMessage(reply, 'assistant');
    }, 1000 + Math.random() * 800); // Random delay between 1.0s and 1.8s
  }
}
