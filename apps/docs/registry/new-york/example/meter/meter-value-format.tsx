import { Label } from "@/registry/default/ui/field"
import { Meter } from "@/registry/default/ui/meter"

export default function MeterValueFormat() {
  return (
    <Meter
      value={60}
      className={"w-[60%]"}
      formatOptions={{ style: "currency", currency: "JPY" }}
    >
      {({ valueText }) => (
        <div className="w-full flex justify-between">
          <Label>Currency</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
