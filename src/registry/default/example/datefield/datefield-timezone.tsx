import {
  parseAbsoluteToLocal,
  parseZonedDateTime,
} from "@internationalized/date"

import { DateField, DateInput } from "@/registry/default/ui/datefield"
import { Label } from "@/registry/default/ui/field"

export default function DateFieldTimeZone() {
  return (
    <div className="flex flex-col gap-2">
      <DateField
        defaultValue={parseZonedDateTime(
          "2022-11-07T00:45[America/Los_Angeles]"
        )}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Event date</Label>
        <DateInput />
      </DateField>
      <DateField
        defaultValue={parseAbsoluteToLocal("2021-11-07T07:45:00Z")}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Event date</Label>
        <DateInput />
      </DateField>
    </div>
  )
}
