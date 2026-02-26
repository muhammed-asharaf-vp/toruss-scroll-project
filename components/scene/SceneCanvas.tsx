"use client"

import { Canvas } from "@react-three/fiber"
import CoreScene from "./CoreScene"


interface SceneCanvasProps {
  progress: number
}
export default function SceneCanvas({
  progress,
}: SceneCanvasProps) {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Background color */}
        <color attach="background" args={["#000000"]} />

        {/* Subtle fog */}
        <fog attach="fog" args={["#050505", 8, 18]} />

        <CoreScene progress={progress}/>
      </Canvas>
    </div>
  )
}