"use client"

import { useThree, useFrame } from "@react-three/fiber"

export default function CameraRig({
  progress,
}: {
  progress: number
}) {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.z = 8 - progress * 4
  })

  return null
}