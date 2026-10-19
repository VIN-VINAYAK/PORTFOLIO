import { MARQUEE } from '../data/content'

export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div>
        {[...MARQUEE, ...MARQUEE].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
