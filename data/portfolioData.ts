export interface Project {
  id: string;
  title: string;
  role: string;
  badges: string[];
  description: string;
  tech: string[];
  impact?: string[];
  link?: string;
  type?: "Live" | "GitHub" | "Demo";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  oneLineImpact: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface Achievement {
  title: string;
  description: string;
  links?: { label: string; url: string }[];
}

export interface Competition {
  name: string;
  url?: string;
  badge?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  image: string;
  category: "AI & ML" | "Programming" | "Web & Database" | "Other Professional";
}

export const portfolioData = {
  hero: {
    name: "Sajida Javed",
    title: "Engineering Reliable SaaS & AI Systems",
    stanfordBadge: "Section Leader @ Stanford Code in Place (2026)",
    statement: "Building production-ready Laravel web applications, multi-tenant SaaS platforms, and secure backend architectures.",
    metrics: [
      { value: "3+ Years", label: "Dev Experience" },
      { value: "7+", label: "Commercial Projects" },
      { value: "4+", label: "Production Deployments" }
    ]
  },
  about: {
    description: "Full-Stack Developer and AI Engineer with experience building scalable Laravel, Vue.js, and AI-powered applications using Python and AWS. Skilled in REST APIs, real-time systems, payment integration, and machine learning solutions. Developed multi-tenant platforms, recommendation systems, and production-ready web applications. Stanford Code in Place Section Leader 2026 with strong competitive programming and problem-solving background.",
    highlights: [
      "3+ years building Laravel and SaaS applications",
      "Stanford Code in Place Section Leader (2026)",
      "96.7 percentile in National Skill Competency Test",
      "Competitive programmer with national-level achievements"
    ]
  },
  experience: [
    {
      role: "Section Leader",
      company: "Stanford Code in Place",
      period: "Apr 2026 – May 2026",
      oneLineImpact: "Mentored global programming students in Stanford's global Python coding initiative.",
      description: "Selected to mentor international students in Python programming fundamentals, debugging practices, and algorithmic problem-solving.",
      contributions: [
        "Mentored international students in programming fundamentals",
        "Guided global learners through python code debugging",
        "Conducted interactive support sessions on problem solving"
      ],
      technologies: ["Python", "Problem Solving", "Git"]
    },
    {
      role: "Full-Stack Laravel Developer",
      company: "Freelance",
      period: "Sep 2024 – Nov 2025",
      oneLineImpact: "Delivered scalable Laravel web applications and multi-tenant SaaS platforms.",
      description: "Developed and deployed commercial multi-tenant SaaS systems integrating secure subscription architectures and real-time messaging services.",
      contributions: [
        "Built multi-tenant architectures with isolated database instances",
        "Integrated Stripe payment gateways for billing workflows",
        "Implemented real-time features using Laravel Echo and Pusher WebSockets"
      ],
      technologies: ["Laravel", "Vue.js", "Redis", "Stripe", "AWS"]
    },
    {
      role: "Backend Developer",
      company: "AwazDo",
      period: "Sep 2023 – Jan 2024",
      oneLineImpact: "Optimized server reliability, API performance, and database architectures.",
      description: "Investigated and resolved database query bottlenecks, connection pools, and backend production API service failures.",
      contributions: [
        "Resolved critical database query deadlocks",
        "Optimized slow SQL queries, reducing load by 40%",
        "Engineered secure, scalable REST APIs for frontend integration"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "API Tuning", "Redis"]
    }
  ] as Experience[],
  projects: [
    {
      id: "awazdo-project",
      title: "AwazDo (Production Maintenance & Debugging)",
      role: "Backend Developer (Freelance)",
      badges: ["Production System"],
      description:
        "Worked on a live US-based platform, taking ownership of production issues across the application. Investigated and resolved backend bugs, database-related problems, API failures, and user-reported issues, improving platform stability and overall system reliability. Collaborated with existing codebases, identified root causes of complex problems, and delivered fixes without disrupting active users.",
      tech: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Blade Templates",
        "Server-Side DataTables"
      ]
    },

    {
      id: "load-masta",
      title: "Load Masta",
      role: "Full-Stack Laravel Developer",
      badges: ["Commercial"],
      description:
        "Joined an existing logistics management platform and led major system enhancements across both frontend and backend. Replaced static permission handling with a dynamic Role & Permission Management System, allowing administrators to create and manage access controls without code changes. Implemented Two-Factor Authentication (2FA), profile management features, and multiple administrative modules. Also modernized the frontend architecture, improved responsiveness across devices, and redesigned several user interfaces to create a more polished user experience.",
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Livewire",
        "Server-Side DataTables"
      ]
    },

    {
      id: "belauctions",
      title: "Belauctions",
      role: "Laravel Backend Developer",
      badges: ["Commercial"],
      description:
        "Contributed to a live auction platform by designing and developing Laravel REST APIs used across multiple application modules. Implemented backend business logic, optimized database interactions, and integrated APIs with frontend components to support seamless data exchange and platform functionality.",
      tech: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs"
      ]
    },

    {
      id: "tusksol",
      title: "TuskSol",
      role: "Frontend Developer",
      badges: ["Client System"],
      description:
        "Enhanced the responsiveness of an existing business platform by redesigning frontend layouts and improving cross-device compatibility. Fixed UI inconsistencies and implemented visual improvements that provided a smoother experience for end users.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },

    {
      id: "review-recommender",
      title: "Review-Based Product Recommender System (AI-Powered)",
      role: "AI Engineer & Full-Stack Developer",
      badges: ["AI Project", "Research"],
      description:
        "Developed an AI-powered recommendation system that analyzes customer reviews to generate personalized product recommendations. Built a machine learning pipeline for sentiment and review analysis, integrated recommendation APIs, and deployed AI models using AWS cloud services. Combined Laravel and Vue.js with Python-based ML services to deliver intelligent recommendations.",
      tech: [
        "AWS SageMaker",
        "AWS S3",
        "Python",
        "Flask",
        "Laravel 12",
        "Vue.js",
        "Laravel Starter Kit",
        "Server-Side DataTables",
        "Social Login",
        "Git",
        "GitHub"
      ],
      link: "https://github.com/sajida-dev/reviews-based-product-recommender-system",
      type: "GitHub"
    },

    {
      id: "real-estate",
      title: "Real Estate Management System",
      role: "Full-Stack Developer",
      badges: ["SaaS Platform"],
      description:
        "Built a full-scale real estate management platform with agents and client users. Implemented property management workflows, real-time notifications, payment integrations, email services, chat functionality, and automated background processes to streamline operations.",
      tech: [
        "Laravel",
        "Vue.js",
        "PHP",
        "Tailwind CSS",
        "Server-Side DataTables",
        "Git",
        "GitHub"
      ],
      link: "https://github.com/sajida-dev/rems-laravel",
      type: "GitHub"
    },

    {
      id: "university-system",
      title: "University Management System",
      role: "Full-Stack Developer",
      badges: ["Client System"],
      description:
        "Built a University Management System to automate academic and administrative workflows for Admins, Faculty, Students, Applicants, and Job Management modules. Developed role-based functionality and streamlined institutional operations.",
      tech: [
        "Laravel 10",
        "Blade",
        "AJAX",
        "jQuery",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "JavaScript",
        "Server-Side DataTables",
      ],
      link: "https://github.com/sajida-dev/University-Management-System-Laravel-Project",
      type: "GitHub"
    },

    {
      id: "photography-studio",
      title: "Photography Website (Javed Studio)",
      role: "Frontend Developer",
      badges: ["Customer Portfolio Site"],
      description:
        "Built a photography portfolio website using Masonry layout to showcase categorized image galleries with a responsive and visually appealing user experience.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Masonry Layout"
      ],
      link: "https://javedstudio.netlify.app",
      type: "Live"
    },

    {
      id: "multi-school",
      title: "Multi-School Management System",
      role: "Full-Stack Developer",
      badges: ["SaaS Platform", "Paid Project"],
      description:
        "Built a multi-tenant School Management System with modular architecture and role-based access control. Improved system scalability through server-side processing, automated notifications and reporting with queues and scheduled jobs, and managed deployment and maintenance of the production application.",
      tech: [
        "Laravel 12",
        "Vue.js",
        "Tailwind CSS",
        "Inertia.js",
        "Livewire",
        "Server-Side DataTables",
        "Vite",
        "MySQL",
        "jQuery",
        "AJAX"
      ],
      link: "https://github.com/sajida-dev/multi-school-system-Laravel-vue",
      type: "GitHub"
    }
  ] as Project[],
  achievements: [
    {
      title: "National Skill Competency Test",
      description: "Scored in the 96.7 Percentile nationwide in IT competency standards."
    },
    {
      title: "University Merit Scholarship",
      description: "Received 2022 – Present for maintaining high academic standing."
    },
    {
      title: "UOE Speed Programming Competition",
      description: "Won 1st Position out of 35 Teams in algorithmic speed challenges.",
      links: [
        { label: "Dec 2024 Leaderboard", url: "https://www.hackerrank.com/contests/speed-programming-2024-december/leaderboard" },
        { label: "April 2025 Leaderboard", url: "https://www.hackerrank.com/contests/speed-programming-2025-april/leaderboard" }
      ]
    },
    {
      title: "Codex 2.0 & 3.0 (Namal University)",
      description: "Top 5 Finish in Codex 2.0 and successfully qualified with verified proof in Codex 3.0.",
      links: [
        { label: "Codex 2.0 Leaderboard", url: "https://drive.google.com/file/d/1N_jDgpbRIOwnQf6XPgD04GHVK1nprMFA/view?usp=sharing" },
        { label: "Codex 3.0 Certificate", url: "https://drive.google.com/file/d/1UpSpZIm8mAqECcV_0LSUq0fJzflEWT1A/view?usp=drive_link" }
      ]
    }
  ] as Achievement[],
  featuredHighlights: [
    { title: "AI Projects", subtitle: "5", desc: "AI-driven applications and research implementations." },
    { title: "Open Source", subtitle: "10+", desc: "Contributions to community libraries and tools." },
    { title: "Certifications", subtitle: "12", desc: "Completed AI and development certifications." },
    { title: "Competitions", subtitle: "6", desc: "Top placements in programming contests." }
  ],
  skills: [
    { title: "Backend Engineering", items: ["Laravel", "PHP", "REST APIs", "Authentication", "RBAC", "WebSockets"] },
    { title: "Frontend Engineering", items: ["Vue.js", "Next.js", "JavaScript", "Responsive Design"] },
    { title: "AI & Machine Learning", items: ["Python", "PyTorch", "Scikit-Learn", "Keras", "Transformers", "NLP", "Pandas", "NumPy"] },
    { title: "Cloud & DevOps", items: ["AWS", "SageMaker", "S3", "Hostinger", "cPanel"] },
    { title: "Databases", items: ["MySQL", "Redis", "PostgreSQL"] }
  ] as SkillCategory[],
  competitiveProgramming: {
    profiles: [
      { name: "LeetCode", url: "https://leetcode.com/SajidaJaved" },
      { name: "HackerRank", url: "https://hackerrank.com/sajidajaved" },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/sajidajaved/" },
      { name: "Kaggle", url: "https://kaggle.com/sajidadev" },
      { name: "Hugging Face", url: "https://huggingface.co/sajida-dev" }
    ],
    competitions: [
      { name: "UOE Speed Programming Competition (Dec 2024)", url: "https://drive.google.com/file/d/1wIJXfJ-GgC-CjNORK2t0a1MRgEYEbKpq/view?usp=drive_link", badge: "1st Place", image: "/competition_certificates/uoe dec 2024.png" },
      { name: "UOE Speed Programming Competition (April 2025)", url: "https://drive.google.com/file/d/11uRthmTXWfOqqMhLfKrlM7FXUqdwVScY/view?usp=drive_link", badge: "1st Place", image: "/competition_certificates/uoe april 2025.png" },
      { name: "Codex 2.0 (Namal)", url: "https://drive.google.com/file/d/1N_jDgpbRIOwnQf6XPgD04GHVK1nprMFA/view?usp=drive_link", badge: "Top 5", image: "/competition_certificates/codex2.0.jpeg" },
      { name: "CALICO Spring 2025 (UC Berkeley)", url: "https://drive.google.com/file/d/1bDC65JYVoB-iT_6S_IBZM5UtJlAcNEto/view?usp=drive_link", badge: "Certificate", image: "/competition_certificates/calico 25.png" },
      { name: "ICSC 2025", url: "https://icscompetition.org/c/Certificate-QR-2025-FF828CF9590-abad82cee5f29a2604b408b38147f777.pdf", badge: "Certificate", image: "/competition_certificates/icsc qualification round certificate.png" },
      { name: "CALICO Spring 2026 (UC Berkeley)", url: "https://drive.google.com/file/d/1oguUwtW_GE6DL5dnx0JQQ15YfJ5xGBQo/view?usp=drive_link", badge: "Certificate", image: "/competition_certificates/calico 26.png" },
      { name: "MIT² Informatics Tournament", badge: "Qualified" },
      { name: "ICPC Winter Challenge (Huawei)", badge: "Participant" }
    ] as Competition[]
  },
  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI (Coursera)",
      image: "/all_certificates/Coursera - neural networks and deep learning CVCU5BGISF77.png",
      category: "AI & ML"
    },
    {
      title: "Improving Deep Neural Networks",
      issuer: "DeepLearning.AI (Coursera)",
      image: "/all_certificates/Coursera improving hyperparams SH9FRVBP959T.png",
      category: "AI & ML"
    },
    {
      title: "Structuring Machine Learning Projects",
      issuer: "DeepLearning.AI (Coursera)",
      image: "/all_certificates/Coursera QSXWU5CHJVZB.png",
      category: "AI & ML"
    },
    {
      title: "Data Analyst Professional Certificate",
      issuer: "IBM / Coursera",
      image: "/all_certificates/Sajida Javed Data analyst.png",
      category: "AI & ML"
    },
    {
      title: "National Skill Competency Test (NCST)",
      issuer: "National IT Board",
      image: "/all_certificates/ncst 2026.jpeg",
      category: "Other Professional"
    },
    {
      title: "IT & Software Development Internship",
      issuer: "Police Department IT Division",
      image: "/all_certificates/police internship.jpeg",
      category: "Other Professional"
    },
    {
      title: "1-Year Diploma in Computer Applications",
      issuer: "Technical Education Board",
      image: "/all_certificates/1 year computer course.jpeg",
      category: "Other Professional"
    },
    {
      title: "7-Day LeetCode Streak Challenge",
      issuer: "LeetCode",
      image: "/all_certificates/7 days leetcode Sajida Javed.png",
      category: "Programming"
    },
    {
      title: "WordSprint 2.0 Competency Certificate",
      issuer: "Namal University",
      image: "/all_certificates/Sajida Javed WordSprint 2.0 Certificate.png",
      category: "Programming"
    },
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      image: "/all_certificates/hackerrank problem solving basic certificate.png",
      category: "Programming"
    },
    {
      title: "Problem Solving Skills (Basic)",
      issuer: "HackerRank",
      image: "/all_certificates/problem_solving_basic certificate.png",
      category: "Programming"
    },
    {
      title: "Python Programming (Basic)",
      issuer: "HackerRank",
      image: "/all_certificates/python_basic certificate.png",
      category: "Programming"
    },
    {
      title: "Blockchain & Web Integration",
      issuer: "Namal Web3/Blockchain Lab",
      image: "/all_certificates/sajida javed integration blockchain web.png",
      category: "Web & Database"
    },
    {
      title: "Web Development Specialist",
      issuer: "Software Industry Certification",
      image: "/all_certificates/web.jpeg",
      category: "Web & Database"
    },
    {
      title: "Amazon Virtual Assistant (VA)",
      issuer: "E-Commerce Training Group",
      image: "/all_certificates/virtual assistant for amazon.jpeg",
      category: "Other Professional"
    },
    {
      title: "Chinese Language Certificate",
      issuer: "Language Competency Board",
      image: "/all_certificates/chinese language.jpeg",
      category: "Other Professional"
    }
  ] as Certification[],
  contact: {
    email: "sajidajaved604@gmail.com",
    linkedin: "https://linkedin.com/in/sajida-javed",
    github: "https://github.com/sajida-dev",
    portfolio: "https://sajidajaved.netlify.app",
    leetcode: "https://leetcode.com/SajidaJaved",
    hackerrank: "https://hackerrank.com/sajidajaved",
    kaggle: "https://kaggle.com/sajidadev",
    huggingface: "https://huggingface.co/sajida-dev"
  }
};
