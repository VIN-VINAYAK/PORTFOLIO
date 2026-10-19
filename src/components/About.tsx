import { ABOUT_STATS, LEARNING } from '../data/content'
import Chip from './Chip'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="w">
        <Reveal as="p" className="eb">About</Reveal>
        <Reveal as="h2">
          Turning ideas into <span className="gt">intelligent products.</span>
        </Reveal>
        <div className="ab">
          <Reveal delay=".1s">
            <p>
              I’m pursuing a B.Tech in <strong>Artificial Intelligence &amp; Data Science</strong> at VTU, focused on practical software and AI-powered applications. I learn by building — and I like owning a product end to end.
            </p>
            <p>
              My projects span a gamified life-management platform, an AI note-taking assistant and a pediatric vaccination system with ML risk scoring and a RAG assistant. I’m now deepening my work in <strong>LLM apps, AI agents, RAG</strong> and modern AI workflows.
            </p>
            <div className="tg">
              {LEARNING.map((c) => (
                <Chip key={c.label} {...c} />
              ))}
            </div>
          </Reveal>
          <div>
            {ABOUT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={`${0.2 + i * 0.1}s`}>
                <div className="stc glass" data-tilt>
                  <small>{s.label}</small>
                  <b>{s.value}</b>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
