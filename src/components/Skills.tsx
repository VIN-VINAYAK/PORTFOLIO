import { SKILLS } from '../data/content'
import Chip from './Chip'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills">
      <div className="w">
        <Reveal as="p" className="eb">Toolkit</Reveal>
        <Reveal as="h2">
          Where AI meets <span className="gt">full-stack.</span>
        </Reveal>
        <div className="sk">
          {SKILLS.map((g, i) => (
            <Reveal key={g.title} delay={`${i * 0.1}s`}>
              <div className="sg glass" data-tilt>
                <h3>{g.title}</h3>
                <div className="tg">
                  {g.items.map((c) => (
                    <Chip key={c.label} {...c} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" style={{ marginTop: 18, color: 'var(--mu)', fontSize: 13 }}>
          Dashed chips = currently learning.
        </Reveal>
      </div>
    </section>
  )
}
