import { useEffect, useState } from 'react'

export function useTypewriter(words: string[]) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    let w = 0
    let c = 0
    let del = false
    let id = 0
    const tick = () => {
      const word = words[w]
      c += del ? -1 : 1
      setText(word.slice(0, c))
      let delay = del ? 35 : 75
      if (!del && c === word.length) {
        del = true
        delay = 1500
      } else if (del && c === 0) {
        del = false
        w = (w + 1) % words.length
        delay = 300
      }
      id = window.setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(id)
  }, [words])

  return text
}
