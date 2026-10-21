import About from './components/About'
import { Loader, Progress } from './components/Chrome'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Scene from './components/Scene'
import Skills from './components/Skills'
import { usePointerEffects } from './hooks/usePointerEffects'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  usePointerEffects()

  return (
    <>
      <Loader />
      <Scene theme={theme} />
      <Progress />
      <Cursor />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer>© 2026 Nainesh Kumar Gajre · Built with React &amp; three.js</footer>
    </>
  )
}
