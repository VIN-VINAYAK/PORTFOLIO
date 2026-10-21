import { PROJECTS } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects">
      <div className="w">
        <Reveal as="p" className="eb">Selected work</Reveal>
        <Reveal as="h2">
          Products, not just <span className="gt">tutorials.</span>
        </Reveal>
        <div className="pj">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={`${i * 0.12}s`}>
              <article className="pc glass" data-tilt>
                <div className="no">{p.no}</div>
                <small>{p.kicker}</small>
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="tg">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                {(p.link || p.repo) && (
                  <div className="pl">
                    {p.link && (
                      <a className="btn" href={p.link} target="_blank" rel="noopener noreferrer">
                        {p.linkLabel || 'View on GitHub ↗'}
                      </a>
                    )}
                    {p.repo && (
                      <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
