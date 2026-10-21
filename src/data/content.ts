export type Chip = { label: string; learning?: boolean }

export const LINKS = {
  email: 'vinvinayak80@gmail.com',
  phone: '+919148478859',
  phoneLabel: '+91 91484 78859',
  github: 'https://github.com/VIN-VINAYAK',
  linkedin: 'https://in.linkedin.com/in/nainesh-kumar-875756419',
  vextracker: 'https://github.com/VIN-VINAYAK/VexTracker',
  lifeLeveling: 'https://github.com/VIN-VINAYAK/Life-Leveling',
  thunderNotes: 'https://github.com/VIN-VINAYAK/notes-app',
  portfolio: 'https://nainesh-portfolio-psi.vercel.app/',
  portfolioRepo: 'https://github.com/VIN-VINAYAK/PORTFOLIO',
} as const

/** Builds a Gmail compose URL so a click opens Gmail ready to write to the address. */
export const gmailCompose = (to: string) =>
  `https://mail.google.com/mail/?${new URLSearchParams({ view: 'cm', fs: '1', to }).toString()}`

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certs' },
  { label: 'Contact', href: '#contact' },
]

export const NAME = 'Nainesh Kumar'
export const ROLES = ['Data Analytics & BI', 'Generative AI Developer', 'AI / ML Engineer', 'Full‑Stack Builder', 'LLM & RAG']
export const MARQUEE = ['Power BI', 'SQL', 'Generative AI', 'LLMs', 'Python', 'RAG', 'React', 'Node.js', 'MongoDB', 'FastAPI', 'Gemini', 'Groq']

export const ABOUT_STATS = [
  { label: 'Degree', value: 'B.Tech AI & Data Science · VTU' },
  { label: 'Focus', value: 'Data Analytics · GenAI · Full‑Stack' },
  { label: 'Looking for', value: 'Data Analytics & GenAI internships, entry-level roles' },
]

export const LEARNING: Chip[] = [
  { label: 'AI agents', learning: true },
  { label: 'RAG', learning: true },
  { label: 'Prompt engineering' },
  { label: 'AI APIs' },
  { label: 'Deep learning' },
]

export type Project = {
  no: string
  kicker: string
  title: string
  blurb: string
  tags: string[]
  link?: string
  linkLabel?: string
  repo?: string
}

export const PROJECTS: Project[] = [
  {
    no: '01',
    kicker: 'AI × Habits × Growth',
    title: 'Life‑Leveling',
    blurb:
      'A gamified life-management platform that unifies tasks, habits, fitness, nutrition and expenses — with XP, leaderboards, an AI assistant and meal-image nutrition analysis. Currently building.',
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini / Groq'],
    link: LINKS.lifeLeveling,
  },
  {
    no: '02',
    kicker: 'AI × Productivity',
    title: 'Thunder Notes',
    blurb: 'A MERN note platform with AI summarization and a chatbot, so students can learn faster by asking questions of their own material.',
    tags: ['MERN', 'Chakra UI', 'LLM chatbot'],
    link: LINKS.thunderNotes,
  },
  {
    no: '03',
    kicker: 'AI × Healthcare',
    title: 'VexTracker AI',
    blurb:
      'Pediatric vaccination platform: signed QR vaccine passes, doctor portal, dropout-risk ML, demand forecasting, cold-chain inventory and a safety-filtered RAG assistant.',
    tags: ['FastAPI', 'React', 'MongoDB', 'Groq · RAG'],
    link: LINKS.vextracker,
  },
  {
    no: '04',
    kicker: '3D Web × Creative Dev',
    title: '3D Glass Portfolio',
    blurb:
      'My personal 3D portfolio — a React, TypeScript and Vite app with a live three.js scene behind a glassmorphism UI, where scrolling flies the camera through a neural-network tunnel, cards tilt in 3D and a dark/light theme switcher adapts the whole scene. Deployed on Vercel.',
    tags: ['React', 'TypeScript', 'Three.js', 'Vite', 'Vercel'],
    link: LINKS.portfolio,
    linkLabel: 'View live site ↗',
    repo: LINKS.portfolioRepo,
  },
]

export type Skill = { label: string; level: number }

/** Levels are self-assessed practical proficiency (0–100). Edit freely. */
export const SKILLS: { title: string; focus?: boolean; items: Skill[] }[] = [
  {
    title: 'Data Analytics & Business Intelligence',
    focus: true,
    items: [
      { label: 'Power BI', level: 78 },
      { label: 'SQL', level: 75 },
      { label: 'Data Visualization', level: 68 },
      { label: 'Data Analysis', level: 68 },
      { label: 'Excel', level: 57 },
    ],
  },
  {
    title: 'Generative AI & Machine Learning',
    focus: true,
    items: [
      { label: 'Generative AI', level: 58 },
      { label: 'LLM API Integration', level: 62 },
      { label: 'Prompt Engineering', level: 62 },
      { label: 'AI Application Development', level: 58 },
      { label: 'Machine Learning', level: 48 },
      { label: 'Retrieval-Augmented Generation (RAG)', level: 43 },
    ],
  },
  {
    title: 'Databases & Backend Development',
    items: [
      { label: 'MongoDB', level: 78 },
      { label: 'SQL Database Management', level: 75 },
      { label: 'Database Design', level: 62 },
      { label: 'REST API Development', level: 52 },
      { label: 'Node.js', level: 48 },
      { label: 'Express.js', level: 48 },
    ],
  },
  {
    title: 'Frontend & Application Development',
    items: [
      { label: 'HTML & CSS', level: 57 },
      { label: 'React.js', level: 52 },
      { label: 'Tailwind CSS', level: 52 },
      { label: 'JavaScript', level: 48 },
      { label: 'Full-Stack Development', level: 48 },
      { label: 'Python', level: 43 },
    ],
  },
]

export const CERTS: { issuer: string; title: string; covers: string; date: string; valid?: string; image: string; url: string }[] = [
  {
    issuer: 'Oracle',
    title: 'Agentic AI Certified Foundations Associate',
    covers: 'AI agent concepts, LangChain, Model Context Protocol and OCI Enterprise AI Agents.',
    date: 'October 7, 2026',
    valid: 'Valid until October 7, 2028',
    image: 'certs/oracle-agentic-ai.webp',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=53D7FBD350C1ACBD78578EE5A6EF32F7D26EC77F845877933A377EBEA412C488',
  },
  {
    issuer: 'Oracle',
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    covers: 'Core OCI services, security and identity, billing and governance.',
    date: 'June 12, 2026',
    valid: 'Valid until June 12, 2028',
    image: 'certs/oracle-oci-foundations.webp',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=0B18E571C3155ED41368F897FCA2CD793ACBB5DE3DC29DD278F62F07FA12E907',
  },
  {
    issuer: 'Kaggle',
    title: 'Intro to Machine Learning',
    covers: 'Machine learning basics: decision trees, model validation and random forests.',
    date: 'March 23, 2026',
    image: 'certs/kaggle-intro-ml.webp',
    url: 'https://www.kaggle.com/learn/certification/vinayak024/intro-to-machine-learning',
  },
]
