import { Label } from "@/registry/new-york/ui/field"
import { Meter } from "@/registry/new-york/ui/meter"

export default function MeterCustomFormat() {
  return (
    <Meter value={54} className={"w-[60%]"} valueLabel="54 of 60GB">
      {({ valueText }) => (
        <div className="w-full flex justify-between">
          <Label>Space used</Label>
          <span className="value">{valueText}</span>
        </div>
      )}
    </Meter>
  )
}
