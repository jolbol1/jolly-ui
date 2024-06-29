import { DateInput, TimeField } from "@/registry/new-york/ui/datefield"
import { Label } from "@/registry/new-york/ui/field"

export default function TimeFieldDemo() {
  return (
    <TimeField className="space-y-1">
      <Label>Event time</Label>
      <DateInput className={"min-w-[100px]"} />
    </TimeField>
  )
}
