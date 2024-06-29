import React from "react"

import { Label } from "@/registry/default/ui/field"
import { Meter } from "@/registry/default/ui/meter"

export default function MeterDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Meter value={progress} className={"w-[60%]"}>
      {({ valueText }) => (
        <div className="w-full flex justify-between">
          <Label>Storage space</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
