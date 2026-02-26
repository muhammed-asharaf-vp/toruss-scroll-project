// "use client"

// import { useEffect } from "react"
// import { initLenis } from "@/lib/lenis"

// export default function ScrollProvider({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   useEffect(() => {
//     initLenis()
//   }, [])

//   return <>{children}</>
// }

"use client"

import { useEffect } from "react"
import { initLenis, destroyLenis } from "@/lib/lenis"

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    initLenis()

    return () => {
      destroyLenis()
    }
  }, [])

  return <>{children}</>
}