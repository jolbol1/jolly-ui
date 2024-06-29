import { parseAbsoluteToLocal } from "@internationalized/date"

import { DateInput, TimeField } from "@/registry/default/ui/datefield"
import { Label } from "@/registry/default/ui/field"

export default function TimeFieldGranularity() {
  return (
    <TimeField
      granularity="second"
      defaultValue={parseAbsoluteToLocal("2021-04-07T18:45:22Z")}
      className="space-y-1"
    >
      <Label>Event time</Label>
      <DateInput className={"min-w-[100px]"} />
    </TimeField>
  )
}
