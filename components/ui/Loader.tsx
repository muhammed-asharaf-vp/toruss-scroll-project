"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Loader({
  onComplete,
}: {
  onComplete: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const tl = gsap.timeline({
      delay: 1.5, // visible time
      onComplete: () => {
        onComplete() // remove loader after fade
      },
    })

    tl.to(ref.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
  }, [onComplete])

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        opacity: 1,
      }}
    >
      <h1 style={{ color: "#ffe600", fontSize: "3rem" }}>
        LOADING
      </h1>
    </div>
  )
}