"use client"

import * as React from "react"
import { Label } from "react-aria-components"

import { Progress } from "@/registry/new-york/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress aria-label="progress bar" value={progress} className="w-[60%]">
      {({ valueText }) => (
        <div className="mb-1 flex w-full justify-between">
          <Label className="text-sm">Progress</Label>
          <span className="text-sm">{valueText}</span>
        </div>
      )}
    </Progress>
  )
}
