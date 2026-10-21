import { useState } from 'react'
import { gmailCompose, LINKS } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [label, setLabel] = useState('Copy email')
  const mail = gmailCompose(LINKS.email)

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
            <p className="cn-lead">
              Hiring for a Data Analytics, BI or Generative AI role? Send me an enquiry — the link below opens Gmail
              with my address filled in.
            </p>
            <div className="row">
              <a className="btn pri" href={mail} target="_blank" rel="noopener noreferrer" title={`Email ${LINKS.email} on Gmail`}>
                {LINKS.email} ↗
              </a>
              <button className="btn" onClick={copy}>{label}</button>
              <a className="btn" href={`tel:${LINKS.phone}`}>{LINKS.phoneLabel}</a>
            </div>
            <div className="row">
              <a className="btn" href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
