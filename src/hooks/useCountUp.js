import { useEffect, useState } from 'react'

export function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])

  return count
}
