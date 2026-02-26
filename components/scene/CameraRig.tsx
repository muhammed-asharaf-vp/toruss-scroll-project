"use client"

import { useThree, useFrame } from "@react-three/fiber"

export default function CameraRig({
  progress,
}: {
  progress: number
}) {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.z = 9 - progress * 2
    camera.position.y = progress * 1
    camera.lookAt(0, 0, 0)
  })

  return null
}