import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'

type Props = {
  as?: ElementType
  className?: string
  /** CSS time, e.g. ".2s" */
  delay?: string
  style?: CSSProperties
  children?: ReactNode
}

/** Fades/tumbles its children into view the first time they scroll on screen. */
export default function Reveal({ as: Tag = 'div', className = '', delay, style, children }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const css = { ...(delay ? { '--d': delay } : {}), ...style } as CSSProperties
  return (
    <Tag ref={ref} className={`rv ${className}`.trim()} style={css}>
      {children}
    </Tag>
  )
}
