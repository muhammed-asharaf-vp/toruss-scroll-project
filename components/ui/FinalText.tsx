



"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface FinalTextProps {
  progress: number
}

export default function FinalText({ progress }: FinalTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    
    gsap.set(ref.current, {
      opacity: 0,
      scaleX: 0, 
      letterSpacing: "-0.5em", 
      transformOrigin: "center center"
    })
  }, [])

  useEffect(() => {
    if (!ref.current) return

    if (progress > 0.85 && !visible.current) {
      visible.current = true

      gsap.to(ref.current, {
        opacity: 1,
        scaleX: 1,
        letterSpacing: "0.1em", 
        duration: 1.2,
        ease: "expo.out",
        overwrite: "auto",
      })
    }

    if (progress <= 0.85 && visible.current) {
      visible.current = false

      gsap.to(ref.current, {
        opacity: 0,
        scaleX: 0,
        letterSpacing: "-0.5em",
        duration: 0.6,
        ease: "power2.inOut",
        overwrite: "auto",
      })
    }
  }, [progress])

  return (
    <div
      ref={ref}
      className="cyber-text"
      style={{ 
        zIndex: 9999,
        position: 'fixed', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap'
      }}
    >
      <span>
        ASHARAF <span className="text-yellow-400">V</span>P
      </span>
    </div>
  )
}