export type Chip = { label: string; learning?: boolean }

export const LINKS = {
  email: 'vinvinayak80@gmail.com',
  phone: '+919148478859',
  phoneLabel: '+91 91484 78859',
  github: 'https://github.com/VIN-VINAYAK',
  linkedin: 'https://in.linkedin.com/in/nainesh-kumar-875756419',
  instagram: 'https://www.instagram.com/nainesh_gajre/',
  vextracker: 'https://github.com/VIN-VINAYAK/VexTracker',
  lifeLeveling: 'https://github.com/VIN-VINAYAK/Life-Leveling',
  thunderNotes: 'https://github.com/VIN-VINAYAK/notes-app',
} as const

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const NAME = 'Nainesh Kumar'
export const ROLES = ['Generative AI Developer', 'AI / ML Engineer', 'Full‑Stack Builder', 'LLM & RAG']
export const MARQUEE = ['Python', 'React', 'Node.js', 'FastAPI', 'MongoDB', 'LLMs', 'RAG', 'Gemini', 'Groq', 'SQL', 'Power BI', 'Tailwind']

export const ABOUT_STATS = [
  { label: 'Degree', value: 'B.Tech AI & Data Science · VTU' },
  { label: 'Focus', value: 'AI · ML · GenAI · Full‑Stack' },
  { label: 'Looking for', value: 'AI/ML & GenAI internships, entry-level roles' },
]

export const LEARNING: Chip[] = [
  { label: 'AI agents', learning: true },
  { label: 'RAG', learning: true },
  { label: 'Prompt engineering' },
  { label: 'AI APIs' },
  { label: 'Deep learning' },
]

export const PROJECTS: { no: string; kicker: string; title: string; blurb: string; tags: string[]; link?: string }[] = [
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
]

export const SKILLS: { title: string; items: Chip[] }[] = [
  { title: 'AI / ML', items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Predictive models'].map((label) => ({ label })) },
  {
    title: 'Generative AI',
    items: [{ label: 'LLM apps' }, { label: 'Prompt engineering' }, { label: 'Gemini API' }, { label: 'Groq API' }, { label: 'RAG', learning: true }, { label: 'AI agents', learning: true }],
  },
  { title: 'Build', items: ['Python', 'JavaScript', 'React', 'Node.js', 'Express', 'FastAPI', 'Tailwind'].map((label) => ({ label })) },
  { title: 'Data & Cloud', items: ['SQL', 'MongoDB', 'SQLite', 'Power BI', 'OCI', 'Git / GitHub'].map((label) => ({ label })) },
]
