import type { CSSProperties } from 'react'
import { LINKS, NAME, ROLES } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'
import Reveal from './Reveal'

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section id="top">
      <div className="w hero">
        <div>
          <Reveal className="st glass">
            <b />
            Open to Data Analytics &amp; GenAI internships
          </Reveal>
          <Reveal as="p" className="eb" delay=".1s">
            Data Analytics &amp; Generative AI
          </Reveal>
          <h1 aria-label={NAME}>
            {NAME.split(' ').map((word) => (
              <span key={word} className="word">
                {[...word].map((c, i) => (
                  <span
                    key={i}
                    className="ch"
                    aria-hidden="true"
                    style={{ '--i': NAME.indexOf(word) + i } as CSSProperties}
                  >
                    {c}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <div className="role gt">{role}</div>
          <Reveal as="p" className="lead" delay="1.5s">
            I turn data into decisions with Power BI and SQL, and build Generative AI products end to end — from LLM-powered apps to full-stack software.
          </Reveal>
          <Reveal className="row" delay="1.7s">
            <a className="btn pri" href="#projects">
              View projects ↓
            </a>
            <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
