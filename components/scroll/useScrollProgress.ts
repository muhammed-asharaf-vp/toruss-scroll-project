

"use client"

import { useEffect, useState } from "react"

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight

      if (maxScroll <= 0) return

      setProgress(Math.min(scrollTop / maxScroll, 1))
    }

    update()
    window.addEventListener("scroll", update)
    window.addEventListener("resize", update)

    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return progress
}