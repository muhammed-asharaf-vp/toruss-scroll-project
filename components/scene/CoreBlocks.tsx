

"use client"

import { useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"
import { getCircularPosition } from "@/lib/math"

const TOTAL = 9

export default function CoreBlocks({
  progress,
}: {
  progress: number
}) {
  const groupRef = useRef<any>(null)

  useFrame(() => {
    if (!groupRef.current) return

    groupRef.current.children.forEach(
      (child: Mesh, index: number) => {
        // Starting position: tight cluster
        const startX = (index % 3 - 1) * 0.8
        const startY = Math.floor(index / 3) * 0.8 - 1
        const startZ = 0

        // Final circular formation
        const target = getCircularPosition(index, TOTAL, 3)

        // Smooth interpolation
        child.position.x =
          startX * (1 - progress) +
          target.x * progress

        child.position.y =
          startY * (1 - progress)

        child.position.z =
          startZ * (1 - progress) +
          target.z * progress

        // Clean rotation
        child.rotation.y = progress * Math.PI * 2
        child.scale.setScalar(0.8 + progress * 0.4)
      }
    )
    

    // Slight whole group rotation (feels premium)
    groupRef.current.rotation.y = progress * 0.5
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: TOTAL }).map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#00ffff"
            emissiveIntensity={progress * 2}
          />
        </mesh>
      ))}
    </group>
  )
}