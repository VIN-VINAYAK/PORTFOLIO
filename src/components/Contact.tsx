import { useState } from 'react'
import { LINKS } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [label, setLabel] = useState('Copy email')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email)
      setLabel('Copied ✓')
    } catch {
      setLabel(LINKS.email)
    }
    setTimeout(() => setLabel('Copy email'), 2000)
  }

  return (
    <section id="contact">
      <div className="w">
        <Reveal>
          <div className="cn glass" data-tilt>
            <p className="eb">Let’s connect</p>
            <h2>
              Let’s build something <span className="gt">intelligent</span> together.
            </h2>
            <div className="row">
              <button className="btn pri" onClick={copy}>{label}</button>
              <a className="btn" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              <a className="btn" href={`tel:${LINKS.phone}`}>{LINKS.phoneLabel}</a>
            </div>
            <div className="row">
              <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a className="btn" href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
