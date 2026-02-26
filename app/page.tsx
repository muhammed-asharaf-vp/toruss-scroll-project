"use client"

import { useState } from "react"
import useScrollProgress from "@/components/scroll/useScrollProgress"
import SceneCanvas from "@/components/scene/SceneCanvas"
import ScrollSections from "@/components/scroll/ScrollSections"
import FinalText from "@/components/ui/FinalText"
import Loader from "@/components/ui/Loader"

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const progress = useScrollProgress()

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <SceneCanvas progress={progress} />
      <ScrollSections />
      <FinalText progress={progress} />
    </>
  )
}