import React from "react"

import { Label } from "@/registry/new-york/ui/field"
import { Meter } from "@/registry/new-york/ui/meter"

export default function MeterDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Meter value={progress} className={"w-3/5"}>
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Storage space</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
