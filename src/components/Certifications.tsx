import { CERTS } from '../data/content'
import Reveal from './Reveal'

export default function Certifications() {
  return (
    <section id="certs">
      <div className="w">
        <Reveal as="p" className="eb">Certifications</Reveal>
        <Reveal as="h2">
          Proof of <span className="gt">continuous learning.</span>
        </Reveal>
        <div className="cg">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={`${i * 0.12}s`}>
              <article className="cc glass" data-tilt>
                <div className="im">
                  <img src={`${import.meta.env.BASE_URL}${c.image}`} alt={`${c.title} certificate`} loading="lazy" />
                </div>
                <small>{c.issuer}</small>
                <h3>{c.title}</h3>
                <p>{c.covers}</p>
                <p className="dt">
                  Issued {c.date}
                  {c.valid && ` · ${c.valid}`}
                </p>
                <a className="btn" href={c.url} target="_blank" rel="noopener noreferrer">
                  View credential ↗
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
