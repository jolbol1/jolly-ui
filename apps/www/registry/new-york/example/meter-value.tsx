"use client"

import * as React from "react"
import { Label } from "react-aria-components"

import { Meter } from "@/registry/new-york/ui/meter"

export default function MeterValueDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Meter aria-label="storage space" value={progress} className="w-[60%]">
      {({ valueText }) => (
        <div className="mb-1 flex w-full justify-between">
          <Label className="text-sm">Storage space</Label>
          <span className="text-sm">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
