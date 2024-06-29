import { Label } from "@/registry/new-york/ui/field"
import { Progress } from "@/registry/new-york/ui/progress"

export default function ProgressValueFormat() {
  return (
    <Progress
      value={60}
      className={"w-[60%]"}
      formatOptions={{ style: "currency", currency: "JPY" }}
    >
      {({ valueText }) => (
        <div className="w-full flex justify-between">
          <Label>Sending...</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Progress>
  )
}
