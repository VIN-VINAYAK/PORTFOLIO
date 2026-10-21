import type { CSSProperties } from 'react'
import { LEARNING, SKILLS } from '../data/content'
import Chip from './Chip'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills">
      <div className="w">
        <Reveal as="p" className="eb">Technical expertise</Reveal>
        <Reveal as="h2">
          Where data meets <span className="gt">Generative AI.</span>
        </Reveal>
        <div className="sk">
          {SKILLS.map((g, gi) => (
            <Reveal key={g.title} delay={`${gi * 0.1}s`}>
              <div className={`sg glass${g.focus ? ' fo' : ''}`} data-tilt>
                <h3>
                  {g.title}
                  {g.focus && <span className="fl">Core focus</span>}
                </h3>
                {g.items.map((s, i) => (
                  <div key={s.label} className="bar" style={{ '--w': s.level / 100, '--d': `${i * 0.08}s` } as CSSProperties}>
                    <div>
                      <span>{s.label}</span>
                      <b>{s.level}%</b>
                    </div>
                    <span className="trk"><i /></span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay=".15s">
          <div className="lrn glass">
            <small>Currently learning</small>
            {LEARNING.filter((c) => c.learning).map((c) => (
              <Chip key={c.label} {...c} />
            ))}
          </div>
        </Reveal>
        <Reveal as="p" className="note">Self-assessed proficiency based on hands-on use.</Reveal>
      </div>
    </section>
  )
}
