import React from "react"
import {
  parseAbsoluteToLocal,
  parseZonedDateTime,
} from "@internationalized/date"

import { DateField, DateInput } from "@/registry/default/ui/datefield"
import { Label } from "@/registry/default/ui/field"

export default function DateFieldGranularity() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  )
  return (
    <div className="flex flex-col gap-2">
      <DateField
        value={date}
        // @ts-expect-error RAC bug
        onChange={setDate}
        granularity="second"
        defaultValue={parseZonedDateTime(
          "2022-11-07T00:45[America/Los_Angeles]"
        )}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Date and Time</Label>
        <DateInput />
      </DateField>
      <DateField
        value={date}
        // @ts-expect-error RAC bug
        onChange={setDate}
        granularity="day"
        defaultValue={parseZonedDateTime(
          "2022-11-07T00:45[America/Los_Angeles]"
        )}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Date</Label>
        <DateInput />
      </DateField>
    </div>
  )
}
