import { useEffect, useRef, useState } from 'react'

/** Full-screen intro spinner that fades out after a moment. */
export function Loader() {
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1000)
    return () => clearTimeout(t)
  }, [])
  return (
    <div id="ld" className={gone ? 'x' : ''}>
      <div />
    </div>
  )
}

/** Gradient scroll-progress bar pinned to the top of the viewport. */
export function Progress() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let raf = 0
    const loop = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`
      raf = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(raf)
  }, [])
  return <div id="pg" ref={ref} />
}
