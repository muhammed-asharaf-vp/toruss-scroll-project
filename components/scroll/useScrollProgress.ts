// "use client"

// import { useEffect, useState } from "react"

// export default function useScrollProgress() {
//   const [progress, setProgress] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY
//       const maxScroll =
//         document.body.scrollHeight - window.innerHeight
//       setProgress(scrollTop / maxScroll)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return progress
// }

"use client"

import { useEffect, useState } from "react"

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight

      if (maxScroll <= 0) return

      const value = scrollTop / maxScroll
      setProgress(Math.min(value, 1))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return progress
}