export default function Lights() {
  return (
    <>
      {/* Soft ambient */}
      <ambientLight intensity={0.15} />

      {/* Main directional light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#ffffff"
      />

      {/* Rim light for cinematic edge */}
      <directionalLight
        position={[-5, -2, -5]}
        intensity={1.5}
        color="#00ffff"
      />

      {/* Central glow */}
      <pointLight
        position={[0, 0, 0]}
        intensity={2}
        color="#00ffff"
        distance={10}
      />
    </>
  )
}