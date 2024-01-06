"use client"

import * as React from "react"

import { Progress } from "@/registry/default/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress aria-label="progress bar" value={progress} className="w-[60%]" />
  )
}

export default ProgressDemo
