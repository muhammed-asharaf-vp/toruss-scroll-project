// import Lenis from "@studio-freight/lenis"

// export const initLenis = () => {
//   const lenis = new Lenis({
//     lerp: 0.08, // controls smoothness
//     wheelMultiplier: 1,
//     touchMultiplier: 1,
//   })

//   function raf(time: number) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
//   }

//   requestAnimationFrame(raf)
// }

import Lenis from "@studio-freight/lenis"

let lenisInstance: Lenis | null = null

export const initLenis = () => {
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
}

export const getLenis = () => lenisInstance