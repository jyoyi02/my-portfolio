export const navLinks = ["about", "skills", "experience", "projects"];

export const skills = [
  {
    category: "Frontend",
    icon: "laptop",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Ant Design", "Zustand"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Laravel", "Node JS", "Core PHP", "REST APIs", "Socket.IO"],
  },
  {
    category: "Database",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "Firebase", "DBeaver"],
  },
  {
    category: "Tools",
    icon: "tools",
    items: ["Docker", "GitLab", "Postman", "VS Code"],
  },
];

export const experiences = [
  {
    period: "June 2025 - Present",
    title: "Senior Software Developer",
    company: "Central Information Commission (CIC)",
    bullets: [
      "Led full-stack development using React.js and Laravel.",
      "Built complex role-based dashboards with Docker and DBeaver integration.",
      "Implemented secure REST APIs and role-based access control.",
    ],
  },
  {
    period: "February 2024 – May 2025",
    title: "Full Stack Developer",
    company: "DeepMindz Innovations",
    bullets: [
      "Developed web applications using React JS and Laravel.",
      "Implemented file upload, validation, and management modules.",
      "Built attendance, employee onboarding, and ticketing modules.",
    ],
  },
  {
    period: "March 2022 - January 2024",
    title: "Laravel Developer",
    company: "Agicent Technologies",
    bullets: [
      "Developed and maintained web applications using React and Laravel.",
      "Built dynamic modals and forms with React, Axios, and Ant Design.",
    ],
  },
];

export const projects = [
  {
    title: "CIC Management (Appcoms 2.0)",
    description:
      "A scalable full-stack solution for the Central Information Commission with role-based access control and Docker integration.",
    gradient: "from-blue-600 to-slate-900",
    icon: "bank",
    tags: ["Laravel", "React.js", "TypeScript", "Docker"],
  },
  {
    title: "HRMS Web & Mobile App",
    description:
      "Comprehensive HR solution featuring Leave Management, Reimbursement Systems, and secure authentication.",
    gradient: "from-green-600 to-slate-900",
    icon: "users",
    tags: ["Laravel Sanctum", "React", "Tailwind CSS"],
  },
  {
    title: "MeeToShine Mobile App",
    description:
      "Backend solution for a mobile app including REST APIs, Cashfree payment gateway integration, and database optimization.",
    gradient: "from-purple-600 to-slate-900",
    icon: "star",
    tags: ["Laravel", "MySQL", "Cashfree API"],
  },
  {
    title: "UBTEO Real Estate Web App",
    description:
      "American Real Estate Marketplace featuring advanced search filters and an intuitive admin panel.",
    gradient: "from-orange-600 to-slate-900",
    icon: "home",
    tags: ["Laravel", "JavaScript", "MySQL"],
  },
];
