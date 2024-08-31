import { DateField, DateInput } from "@/registry/new-york/ui/datefield"
import { Label } from "@/registry/new-york/ui/field"

export default function DateFieldDemo() {
  return (
    <DateField className={"min-w-[150px] space-y-1"}>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  )
}
