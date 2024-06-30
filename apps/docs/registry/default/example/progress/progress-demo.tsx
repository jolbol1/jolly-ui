import React from "react"

import { Label } from "@/registry/default/ui/field"
import { Progress } from "@/registry/default/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Progress value={progress} className={"w-3/5"}>
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Loading...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  )
}
