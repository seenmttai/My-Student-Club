export function initializeTools() {
  const toolsData = [
    {
      id: 'interview',
      title: 'AI Interview Bot',
      description: 'Perfect your interview skills with our intelligent AI interviewer',
      icon: 'https://assets9.lottiefiles.com/packages/lf20_4kx2q32n.json',
    },
    {
      id: 'resume',
      title: 'Resume Scorer',
      description: 'Get your resume analyzed by AI with industry-specific recommendations',
      icon: 'https://assets8.lottiefiles.com/packages/lf20_5ngs2ksb.json',
      premium: true,
    },
    {
      id: 'articleship',
      title: 'Articleship Scorer',
      description: 'Evaluate your articleship readiness and get matched with top firms',
      icon: 'https://assets2.lottiefiles.com/packages/lf20_4kx2q32n.json',
    },
    {
      id: 'salary',
      title: 'Salary Estimator',
      description: 'Get accurate salary predictions based on your skills and experience',
      icon: 'https://assets5.lottiefiles.com/packages/lf20_5ngs2ksb.json',
      premium: true,
    }
  ];

  const toolsGrid = document.querySelector('.tools-grid');
  if (toolsGrid) {
    toolsGrid.innerHTML = toolsData.map(tool => createToolCard(tool)).join('');
    initializeToolAnimations();
  }
}

function createToolCard(tool) {
  return `
    <div class="tool-card" data-tool="${tool.id}">
      ${tool.premium ? '<span class="feature-badge premium-badge">Premium</span>' : ''}
      <div class="tool-icon">
        <lottie-player src="${tool.icon}" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
      <h3>${tool.title}</h3>
      <p>${tool.description}</p>
      <button onclick="location.href='/tools/${tool.id}'" class="view-tool-btn">
        Try Now
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  `;
}

function initializeToolAnimations() {
  const cards = document.querySelectorAll('.tool-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => observer.observe(card));
}