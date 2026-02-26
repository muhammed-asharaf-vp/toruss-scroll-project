

import Lenis from "@studio-freight/lenis"

let lenisInstance: Lenis | null = null

export const initLenis = () => {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    lerp: 0.08,
    wheelMultiplier: 1,
    touchMultiplier: 1,
  })

  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return lenisInstance
}

export const destroyLenis = () => {
  lenisInstance?.destroy()
  lenisInstance = null
}

export const getLenis = () => lenisInstance