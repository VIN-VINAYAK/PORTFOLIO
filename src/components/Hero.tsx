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
            Open to AI/ML &amp; GenAI internships
          </Reveal>
          <Reveal as="p" className="eb" delay=".1s">
            AI &amp; Data Science Engineer
          </Reveal>
          <h1 aria-label={NAME}>
            {[...NAME].map((c, i) =>
              c === ' ' ? (
                ' '
              ) : (
                <span key={i} className="ch" aria-hidden="true" style={{ '--i': i } as CSSProperties}>
                  {c}
                </span>
              ),
            )}
          </h1>
          <div className="role gt">{role}</div>
          <Reveal as="p" className="lead" delay="1.5s">
            I build AI-powered products, GenAI experiences and full-stack software that solve real problems — from concept to architecture to deployment.
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
