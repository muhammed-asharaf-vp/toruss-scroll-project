"use client"


import CoreBlocks from "./CoreBlocks"
import Lights from "./Lights"
import CameraRig from "./CameraRig"

interface CoreSceneProps {
  progress: number
  
}

export default function CoreScene({
  progress,
}: CoreSceneProps) {

  return (
    <>
      <Lights />
      <CameraRig progress={progress} />
      <CoreBlocks progress={progress} />
    </>
  )
}