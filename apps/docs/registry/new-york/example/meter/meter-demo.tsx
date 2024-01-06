"use client"

import * as React from "react"

import { Meter } from "@/registry/new-york/ui/meter"

export function MeterDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Meter aria-label="meter bar" value={progress} className="w-[60%]" />
}
export default MeterDemo
