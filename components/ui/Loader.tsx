
"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

// Defining the theme constants for consistency
const COLORS = {
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  yellow: "#FFEA00",
  black: "#000000",
}

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // gsap.context handles cleanup for React Strict Mode
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Animate the letters of "LOADING" individually
      const letters = textRef.current?.querySelectorAll(".letter");
      if (letters) {
        gsap.to(letters, {
          y: -10,
          opacity: 1,
          color: COLORS.cyan,
          textShadow: `0 0 15px ${COLORS.cyan}, 0 0 30px ${COLORS.magenta}`,
          stagger: 0.1,
          duration: 0.4,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      // 2. Energetic Dots with dual glow
      gsap.to(".dot", {
        scale: 1.8,
        backgroundColor: COLORS.yellow,
        boxShadow: `0 0 10px ${COLORS.yellow}, 0 0 20px ${COLORS.magenta}`,
        stagger: 0.2,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. The Exit Sequence 
      gsap.delayedCall(2.5, () => {
        const exitTl = gsap.timeline({
          onComplete: () => onComplete(),
        });

        exitTl.to(containerRef.current, {
          opacity: 0,
          scale: 1.1, // Slight zoom out effect
          filter: "blur(20px)",
          duration: 1,
          ease: "power4.in",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  // Split string into spans for individual letter animation
  const loadingText = "LOADING".split("");

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: COLORS.black,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
      }}
    >
      <h1
        ref={textRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "clamp(2rem, 8vw, 4rem)", 
          fontWeight: "900",
          letterSpacing: "4px",
          fontFamily: "sans-serif", 
        }}
      >
        {loadingText.map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{ opacity: 0.3, color: "white" }}
          >
            {char}
          </span>
        ))}

        <span style={{ display: "flex", gap: "10px", marginLeft: "20px" }}>
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="dot"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "white",
                opacity: 0.5,
              }}
            />
          ))}
        </span>
      </h1>
      
    
      <div style={{
        position: "absolute",
        bottom: "10%",
        width: "200px",
        height: "2px",
        background: "rgba(255,255,255,0.1)",
        overflow: "hidden"
      }}>
        <div className="progress-bar" style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, transparent)`,
          transform: "translateX(-100%)",
        }} />
      </div>
    </div>
  )
}