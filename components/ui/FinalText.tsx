// "use client"

// import { useEffect, useRef } from "react"

// interface FinalTextProps {
//   progress: number
// }

// export default function FinalText({ progress }: FinalTextProps) {
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!ref.current) return

//     if (progress > 0.85) {
//       ref.current.style.opacity = "1"
//       ref.current.style.transform = "translateY(0px)"
//     } else {
//       ref.current.style.opacity = "0"
//       ref.current.style.transform = "translateY(40px)"
//     }
//   }, [progress])

//   return (
//     <div
//       ref={ref}
//       className="cyber-text"
//       style={{
//         zIndex: 9999,
//       }}
//     >
//       INNOVATION
//     </div>
//   )
// }

"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface FinalTextProps {
  progress: number
}

export default function FinalText({ progress }: FinalTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useRef(false)

  // Set initial state once
  useEffect(() => {
    if (!ref.current) return

    gsap.set(ref.current, {
      opacity: 0,
      y: 40,
    })
  }, [])

  useEffect(() => {
    if (!ref.current) return

    // Only trigger when state changes
    if (progress > 0.85 && !visible.current) {
      visible.current = true

      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      })
    }

    if (progress <= 0.85 && visible.current) {
      visible.current = false

      gsap.to(ref.current, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      })
    }
  }, [progress])

  return (
    <div
      ref={ref}
      className="cyber-text"
      style={{ zIndex: 9999 }}
    >
<span>
  ASHARAF <span className="text-yellow-400">V</span>P
</span>    </div>
  )
}