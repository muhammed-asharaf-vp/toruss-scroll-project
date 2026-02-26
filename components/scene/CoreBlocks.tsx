"use client"

import { useRef } from "react"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"
import { getCircularPosition } from "@/lib/math"

const TOTAL = 8

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
        const target = getCircularPosition(index, TOTAL, 2)

        child.position.x =
          (1 - progress) * (Math.random() * 6 - 3) +
          progress * target.x

        child.position.y =
          (1 - progress) * (Math.random() * 6 - 3)

        child.position.z =
          (1 - progress) * (Math.random() * 6 - 3) +
          progress * target.z

        child.rotation.y += 0.01
      }
    )
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: TOTAL }).map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color="white"
            emissive="#00ffff"
            emissiveIntensity={progress * 3}
          />
        </mesh>
      ))}
    </group>
  )
}