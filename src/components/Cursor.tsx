import { useEffect, useRef } from 'react'

/** Smoothly-following cursor ring that grows over interactive elements (mouse only). */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !matchMedia('(pointer: fine)').matches) return
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let raf = 0

    const move = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.classList.add('on')
      el.classList.toggle('h', !!(e.target as Element).closest('a,button,[data-tilt]'))
    }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      el.style.transform = `translate(${x}px,${y}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', move)
    loop()
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div id="cu" ref={ref}>
      <i />
    </div>
  )
}
