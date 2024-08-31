import { Label } from "@/registry/default/ui/field"
import { Progress } from "@/registry/default/ui/progress"

export default function ProgressValueFormat() {
  return (
    <Progress
      value={60}
      className={"w-3/5"}
      formatOptions={{ style: "currency", currency: "JPY" }}
    >
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>Sending...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  )
}
