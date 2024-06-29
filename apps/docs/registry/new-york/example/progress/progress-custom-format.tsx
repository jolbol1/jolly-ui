import { Label } from "@/registry/default/ui/field"
import { Progress } from "@/registry/default/ui/progress"

export default function ProgressCustomFormat() {
  return (
    <Progress value={30} className={"w-[60%]"} valueLabel="30 of 100 dogs">
      {({ valueText }) => (
        <div className="w-full flex justify-between">
          <Label>Feeding...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  )
}
