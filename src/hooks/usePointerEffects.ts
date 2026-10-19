import { useEffect } from 'react'

/** 3D tilt + cursor glare on [data-tilt] elements, and magnetic pull on .btn (mouse only). */
export function usePointerEffects() {
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return
    let tilt: HTMLElement | null = null
    let btn: HTMLElement | null = null

    const reset = () => {
      if (tilt) tilt.style.transform = ''
      if (btn) btn.style.transform = ''
      tilt = btn = null
    }

    const move = (e: PointerEvent) => {
      const target = e.target as Element
      const nt = target.closest<HTMLElement>('[data-tilt]')
      if (tilt && tilt !== nt) tilt.style.transform = ''
      tilt = nt
      if (nt) {
        const r = nt.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        nt.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 12}deg) rotateY(${(x - 0.5) * 14}deg) scale(1.02)`
        nt.style.setProperty('--mx', `${x * 100}%`)
        nt.style.setProperty('--my', `${y * 100}%`)
      }

      const nb = target.closest<HTMLElement>('.btn')
      if (btn && btn !== nb) btn.style.transform = ''
      btn = nb
      if (nb) {
        const r = nb.getBoundingClientRect()
        nb.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`
      }
    }

    window.addEventListener('pointermove', move)
    document.documentElement.addEventListener('pointerleave', reset)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', reset)
    }
  }, [])
}
