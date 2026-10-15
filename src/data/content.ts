// GitHub repositories for portfolio
export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  category: 'web-app' | 'data-science' | 'ml' | 'enterprise';
  featured?: boolean;
}

export const githubRepos: GitHubRepo[] = [
  // Featured
  {
    name: 'ams-client-portal',
    description: 'Enterprise client portal with dashboard, analytics, and document management',
    url: 'https://github.com/skmudassir-it/ams-client-portal',
    language: 'TypeScript',
    stars: 45,
    category: 'enterprise',
    featured: true,
  },
  {
    name: 'top-100-ai-skills',
    description: 'Curated dataset hub of 100 AI skills per domain for ML practitioners',
    url: 'https://github.com/skmudassir-it/top-100-ai-skills',
    language: 'Python',
    stars: 128,
    category: 'data-science',
    featured: true,
  },
  {
    name: 'Expense-Reimbursement-System',
    description: 'Full-stack expense management with approval workflows and reporting',
    url: 'https://github.com/skmudassir-it/Expense-Reimbursement-System',
    language: 'JavaScript',
    stars: 32,
    category: 'enterprise',
    featured: true,
  },
  // Web Applications
  {
    name: 'travel',
    description: 'Travel booking platform with itinerary planning',
    url: 'https://github.com/skmudassir-it/travel',
    language: 'TypeScript',
    stars: 28,
    category: 'web-app',
  },
  {
    name: 'hvac-mep-services',
    description: 'HVAC & MEP services business website with Next.js',
    url: 'https://github.com/skmudassir-it/hvac-mep-services',
    language: 'TypeScript',
    stars: 15,
    category: 'web-app',
  },
  {
    name: 'catering-chef',
    description: 'Savory Seasons Catering website',
    url: 'https://github.com/skmudassir-it/catering-chef',
    language: 'JavaScript',
    stars: 12,
    category: 'web-app',
  },
  {
    name: 'wise-ams-ecommerce',
    description: 'Multi-page e-commerce website with 57 products',
    url: 'https://github.com/skmudassir-it/wise-ams-ecommerce',
    language: 'JavaScript',
    stars: 22,
    category: 'web-app',
  },
  {
    name: 'srsoft-website',
    description: 'Modern IT Consulting Website. Next.js 16 + Tailwind CSS',
    url: 'https://github.com/skmudassir-it/srsoft-website',
    language: 'TypeScript',
    stars: 18,
    category: 'web-app',
  },
  // Data Science & ML
  {
    name: 'SAP_HealthLab',
    description: 'Healthcare analytics and prediction system',
    url: 'https://github.com/skmudassir-it/SAP_HealthLab',
    language: 'Python',
    stars: 42,
    category: 'data-science',
  },
  {
    name: 'emdash-test',
    description: 'Testing framework and automation suite',
    url: 'https://github.com/skmudassir-it/emdash-test',
    language: 'Python',
    stars: 8,
    category: 'ml',
  },
  // Business Apps
  {
    name: 'balancepoint-acupuncture',
    description: 'BalancePoint Acupuncture - Holistic health website',
    url: 'https://github.com/skmudassir-it/balancepoint-acupuncture',
    language: 'TypeScript',
    stars: 14,
    category: 'web-app',
  },
  {
    name: 'meditation-coaching',
    description: 'StillMind Meditation Co. — professional meditation coaching platform',
    url: 'https://github.com/skmudassir-it/meditation-coaching',
    language: 'JavaScript',
    stars: 11,
    category: 'web-app',
  },
  {
    name: 'stoneset-tile-studio',
    description: 'Tile and stone installation company website',
    url: 'https://github.com/skmudassir-it/stoneset-tile-studio',
    language: 'TypeScript',
    stars: 9,
    category: 'web-app',
  },
  {
    name: 'wildpaws-exotic-pet-care',
    description: 'Exotic pet care, boarding and habitat design',
    url: 'https://github.com/skmudassir-it/wildpaws-exotic-pet-care',
    language: 'JavaScript',
    stars: 7,
    category: 'web-app',
  },
  {
    name: 'skywatch-birding-tours',
    description: 'Expert-led bird watching tours and photography',
    url: 'https://github.com/skmudassir-it/skywatch-birding-tours',
    language: 'TypeScript',
    stars: 10,
    category: 'web-app',
  },
  {
    name: 'waverider-surf-academy',
    description: 'Surf lessons on the Central Coast',
    url: 'https://github.com/skmudassir-it/waverider-surf-academy',
    language: 'JavaScript',
    stars: 6,
    category: 'web-app',
  },
  {
    name: 'playup-sports-leagues',
    description: 'Youth sports league management system',
    url: 'https://github.com/skmudassir-it/playup-sports-leagues',
    language: 'TypeScript',
    stars: 16,
    category: 'enterprise',
  },
  {
    name: 'mep-services',
    description: 'HVAC, MEP Engineering & Duct Manufacturing',
    url: 'https://github.com/skmudassir-it/mep-services',
    language: 'JavaScript',
    stars: 13,
    category: 'web-app',
  },
];

// Experience data
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: 'BSW Outlet',
    role: 'SAP Consultant & Data Engineer',
    period: 'Jan 2026 - Present',
    description: 'Leading SAP BTP-driven process digitization for retail operations. Building real-time data pipelines and analytics dashboards.',
    tech: ['SAP BTP', 'S/4HANA', 'Python', 'SQL', 'Tableau'],
    achievements: [
      'Reduced order processing time by 60% through automation',
      'Built real-time inventory dashboard serving 200+ users',
      'Implemented predictive demand forecasting model',
    ],
  },
  {
    company: 'Beauty and Company',
    role: 'Senior SAP Consultant',
    period: 'Mar 2023 - Dec 2025',
    description: 'Delivered complete SAP Customer Experience ecosystem for global e-commerce operations.',
    tech: ['SAP Commerce', 'Analytics Cloud', 'Python', 'ML', 'API Management'],
    achievements: [
      'Launched omnichannel platform driving $2M+ annual sales',
      'Built customer analytics pipeline processing 1M+ records',
      'Implemented recommendation engine increasing conversion by 15%',
    ],
  },
  {
    company: 'Attra (Synechron)',
    role: 'SAP Technical Consultant',
    period: 'Jul 2021 - Dec 2022',
    description: 'Developed SAP integration solutions and automated testing frameworks for financial services.',
    tech: ['SAP S/4HANA', 'ABAP', 'Python', 'AWS', 'Jenkins'],
    achievements: [
      'Architected CI/CD pipelines reducing deployment time by 70%',
      'Built automated test framework reducing defects by 40%',
      'Achieved 99.9% system availability for critical transactions',
    ],
  },
  {
    company: 'Aditi Digital Solutions',
    role: 'Data & Analytics Consultant',
    period: 'Feb 2020 - May 2021',
    description: 'Architected data solutions for marketing and media industry clients.',
    tech: ['Python', 'TensorFlow', 'SAP Analytics Cloud', 'AWS', 'Spark'],
    achievements: [
      'Built predictive models achieving 92% accuracy',
      'Reduced data processing costs by 60% with serverless architecture',
      'Created real-time campaign analytics dashboards',
    ],
  },
  {
    company: 'Aurangabad Electricals',
    role: 'Production Analyst',
    period: 'Oct 2017 - Nov 2019',
    description: 'Digitized manufacturing operations using SAP MM/PP and data analytics.',
    tech: ['SAP MM', 'SAP PP', 'Excel', 'Power BI', 'Lean'],
    achievements: [
      'Reduced scrap rates by 15% through process optimization',
      'Implemented production monitoring system',
      'Streamlined procurement workflows',
    ],
  },
];

// Skills data
export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export const skillCategories = {
  'Data Science & ML': [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'TensorFlow / PyTorch', level: 85, icon: '🧠' },
    { name: 'Scikit-learn', level: 90, icon: '📊' },
    { name: 'Pandas / NumPy', level: 95, icon: '📈' },
    { name: 'SQL / NoSQL', level: 90, icon: '🗄️' },
    { name: 'Spark / Hadoop', level: 75, icon: '⚡' },
    { name: 'Data Visualization', level: 88, icon: '🎨' },
    { name: 'Statistical Analysis', level: 85, icon: '📐' },
  ],
  'Web Development': [
    { name: 'React / Next.js', level: 92, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '📘' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨' },
    { name: 'PostgreSQL', level: 82, icon: '🐘' },
    { name: 'MongoDB', level: 78, icon: '🍃' },
    { name: 'REST APIs', level: 90, icon: '🔌' },
    { name: 'GraphQL', level: 70, icon: '◈' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 85, icon: '☁️' },
    { name: 'Docker', level: 82, icon: '🐳' },
    { name: 'Kubernetes', level: 70, icon: '☸️' },
    { name: 'CI/CD (Jenkins, GitHub Actions)', level: 85, icon: '🔄' },
    { name: 'Vercel / Netlify', level: 90, icon: '▲' },
    { name: 'Azure', level: 75, icon: '🔷' },
  ],
  'Enterprise Solutions': [
    { name: 'SAP S/4HANA', level: 92, icon: '🏢' },
    { name: 'SAP BTP', level: 95, icon: '☁️' },
    { name: 'SAP Fiori / UI5', level: 88, icon: '🎯' },
    { name: 'SAP Analytics Cloud', level: 85, icon: '📊' },
    { name: 'SAP Integration Suite', level: 80, icon: '🔗' },
    { name: 'ABAP / RAP', level: 75, icon: '⚙️' },
  ],
};

// NGO information
export const ngoInfo = {
  name: 'Small Business Growth Initiative',
  mission: 'Empowering small businesses through technology and digital transformation',
  impact: 'Helped 50+ local businesses establish digital presence',
  services: [
    'Free website development for qualifying small businesses',
    'Digital marketing and SEO training workshops',
    'E-commerce setup and integration guidance',
    'Technical mentorship and ongoing support',
  ],
  getStarted: true,
};