export const portfolioData = {
  hero: {
    heading: "AI Engineer & Laravel Full Stack Developer",
    specialization: "Building scalable AI-powered web applications using Laravel, Vue.js, Python, and AWS.",
    badges: [
      "AI + Full Stack Engineer",
      "Laravel + Vue.js Specialist",
      "Stanford Code in Place Section Leader",
      "Hackathon Winner",
      "Open to Remote Opportunities"
    ],
    availability: "Available for AI Internships & Remote Opportunities"
  },
  about: {
    description: "I am a research-oriented AI Engineer and Full Stack Laravel Developer with a strong competitive programming background. As a Stanford Code in Place Section Leader, I focus on building scalable systems while mentoring the next generation of engineers.",
    highlights: [
      "Stanford Code in Place Section Leader 2026",
      "Deep understanding of Transformer models and PyTorch",
      "Proven competitive programming and hackathon track record"
    ]
  },
  researchAndOpenSource: {
    platforms: [
      { name: "Hugging Face", link: "https://huggingface.co/sajida-dev" },
      { name: "Kaggle", link: "https://kaggle.com/sajidadev" },
      { name: "GitHub", link: "https://github.com/sajida-dev" }
    ],
    description: "Active contributor to the open-source AI community, experimenting with Graph Neural Networks (GNNs), multi-agent systems, and releasing fine-tuned models for public research."
  },
  techStack: [
    { name: "Laravel", category: "Backend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Python", category: "AI/ML" },
    { name: "AWS", category: "Deployment" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "PyTorch", category: "AI/ML" },
    { name: "MySQL", category: "Database" },
    { name: "Flask", category: "Backend" },
    { name: "REST APIs", category: "Backend" }
  ],
  skills: {
    ai: ["PyTorch", "Transformers", "GNNs", "LangChain", "OpenAI API", "Hugging Face"],
    backend: ["Laravel", "Python", "Flask", "REST APIs", "WebSockets"],
    frontend: ["Vue.js", "Next.js", "Tailwind CSS", "TypeScript", "React"],
    cloud: ["AWS (EC2, S3, RDS)", "Docker", "CI/CD", "Nginx"],
    databases: ["MySQL", "PostgreSQL", "Redis", "Vector Databases"],
    tools: ["Git", "Postman", "Linux", "VS Code"]
  },
  experience: [
    {
      period: "2026 - Present",
      role: "Section Leader",
      company: "Stanford Code in Place",
      description: "Mentoring global students in Python programming, reviewing code, and leading interactive technical sessions."
    },
    {
      period: "2024 - 2026",
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      description: "Built and deployed robust Laravel and Vue.js applications for international clients, integrating complex APIs and optimizing database queries."
    },
    {
      period: "2024",
      role: "Community Lead",
      company: "UOE DevHub",
      description: "Led the university developer community, organizing hackathons and technical workshops for over 500 students."
    }
  ],
  achievements: [
    {
      metric: "96.7%",
      title: "National Skill Competency Test",
      description: "Scored in the top percentile nationwide in the comprehensive IT and Computer Science examination."
    },
    {
      metric: "10+",
      title: "Hackathon Participant",
      description: "Consistently participated in national, international and university-level hackathons and secure top positions."
    },
    {
      metric: "Top 5%",
      title: "LeetCode & HackerRank",
      description: "Maintained a strong competitive programming profile, solving hundreds of complex algorithmic challenges."
    }
  ],
  references: [
    {
      name: "Prof. Ikram Lali",
      title: "Principal, University of Education Lahore",
      email: "M.i.lali@ue.edu.pk",
      relationship: "Academic & Hackathon Mentor and Supervisor during undergraduate coursework"
    },
    {
      name: "Dr. Imran Kazmi",
      title: "Assistant Professor, University of Education Lahore",
      email: "imrankazmi@ue.edu.pk",
      relationship: "Final Year Project Supervisor and Hackathon Mentor"
    }
  ],
  projects: [
    {
      id: "ai-product-recommender",
      title: "AI-Powered Product Recommender",
      shortDescription: "Built an AI-powered recommendation pipeline using transformer-based sentiment analysis models to deliver personalized e-commerce insights.",
      architecture: [
        { name: "Vue.js", color: "emerald" },
        { name: "Laravel API", color: "red" },
        { name: "Python AI", color: "blue" },
        { name: "AWS", color: "orange" }
      ],
      tags: ["Real-time systems", "AI integrations", "scalable APIs", "recommendation systems"],
      highlights: ["AWS deployment", "Transformer Models", "Sentiment Analysis"],
      link: "https://github.com/sajida-dev/reviews-based-product-recommender-system"
    },
    {
      id: "ai-playground",
      title: "AI Playground",
      shortDescription: "Interactive multi-model environment designed for experimenting with LLMs and prompt engineering, built with robust Laravel backend and real-time Vue.js interface.",
      architecture: [
        { name: "Vue.js", color: "emerald" },
        { name: "Laravel", color: "red" },
        { name: "SST Hugging Face", color: "blue" }
      ],
      tags: ["Real-time systems", "AI integrations"],
      highlights: ["Multi-model testing", "Real-time interactions"],
      link: "https://github.com/sajida-dev/ai-playground"
    },
    {
      id: "multi-school-system",
      title: "Multi-School Management System",
      shortDescription: "Developed a multi-tenant SaaS application catering to multiple educational institutions with centralized management and isolated tenant databases.",
      architecture: [
        { name: "Vue.js", color: "emerald" },
        { name: "Laravel SaaS", color: "red" },
        { name: "MySQL", color: "blue" }
      ],
      tags: ["Multi-tenant SaaS", "Queue systems", "Cron jobs"],
      highlights: ["Isolated databases", "Role-based access", "Automated scheduling"],
      link: "https://github.com/sajida-dev/multi-school-system-Laravel-vue"
    },
    {
      id: "real-estate-system",
      title: "Real Estate Management System",
      shortDescription: "Engineered a comprehensive real estate platform with high-performance search, geospatial queries, and real-time property updates.",
      architecture: [
        { name: "Next.js", color: "emerald" },
        { name: "Laravel", color: "red" },
      ],
      tags: ["scalable APIs", "Stripe integration"],
      highlights: ["Geospatial queries", "Stripe payments", "Real-time updates"],
      link: "https://github.com/sajida-dev/rems-laravel"
    },
    {
      id: "molecule-generator",
      title: "Molecule Generator",
      shortDescription: "A research-focused tool using Graph Neural Networks to predict and generate novel molecular structures for biochemical analysis.",
      architecture: [
        { name: "Python", color: "yellow" },
        { name: "PyTorch (GNN)", color: "blue" }
      ],
      tags: ["AI integrations", "Graph Neural Networks"],
      highlights: ["GNNs", "Biochemical modeling"],
      link: "https://github.com/sajida-dev"
    }
  ],
  whyHireMe: [
    {
      title: "AI + Full Stack Combination",
      description: "Bridging the gap between intelligent AI models and scalable web infrastructure."
    },
    {
      title: "Production Laravel Experience",
      description: "Proven track record of building, optimizing, and deploying complex Laravel applications."
    },
    {
      title: "Competitive Programming & Problem Solving",
      description: "Strong algorithmic foundation honed through competitive programming and hackathons."
    },
    {
      title: "Research-Oriented AI Development",
      description: "Active engagement in AI research, utilizing advanced tools like PyTorch and GNNs."
    }
  ],
  currentlyBuilding: [
    "AI Recommender Pipeline",
    "AI Playground",
    "Molecule Generator",
    "Agentic AI Exploration"
  ],
  currentlyLearning: [
    "Agentic AI",
    "RAG Systems",
    "LangChain",
    "Graph Neural Networks",
    "AI Automation",
    "Multi-Agent Systems"
  ],
  contact: {
    email: "sajidajaved604@gmail.com",
    linkedin: "https://linkedin.com/in/sajida-javed",
    github: "https://github.com/sajida-dev",
    phone: "03004663829",
    location: "Jauharabad, Punjab Pakistan",
    huggingface: "https://huggingface.co/sajida-dev",
    kaggle: "https://kaggle.com/sajidadev",
    leetcode: "https://leetcode.com/SajidaJaved",
    hackerrank: "https://hackerrank.com/sajidajaved",
    portfolio: "https://sajidajaved.netlify.app",
    resumeUrl: "https://docs.google.com/document/d/1IGvG4b7Spj8dAmoRvLBO3Iah8ofvOIOhLI9ocD15H28/export?format=pdf"
  }
};
