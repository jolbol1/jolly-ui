import { DateField, DateInput } from "@/registry/default/ui/datefield"
import { Label } from "@/registry/default/ui/field"

export default function DateFieldDemo() {
  return (
    <DateField className={"min-w-[150px] space-y-1"}>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  )
}
