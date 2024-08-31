import { DateInput, TimeField } from "@/registry/default/ui/datefield"
import { Label } from "@/registry/default/ui/field"

export default function TimeFieldDemo() {
  return (
    <TimeField className="space-y-1">
      <Label>Event time</Label>
      <DateInput className={"min-w-[100px]"} />
    </TimeField>
  )
}
