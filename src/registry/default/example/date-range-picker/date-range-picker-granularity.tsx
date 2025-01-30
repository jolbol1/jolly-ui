import React from "react"
import { parseAbsoluteToLocal } from "@internationalized/date"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/registry/default/ui/calendar"
import {
  DatePickerContent,
  DateRangePicker,
} from "@/registry/default/ui/date-picker"
import { DateInput } from "@/registry/default/ui/datefield"
import { FieldGroup, Label } from "@/registry/default/ui/field"

export default function DateRangePickerGranularity() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal("2021-04-07T18:45:22Z"),
    end: parseAbsoluteToLocal("2021-04-08T20:00:00Z"),
  })

  return (
    <div className="flex flex-col gap-2">
      <DateRangePicker
        value={date}
        // @ts-expect-error RAC bug
        onChange={setDate}
        granularity="second"
        className="min-w-[320px] space-y-1"
      >
        <Label>Date and time range</Label>
        <FieldGroup>
          <DateInput variant="ghost" slot={"start"} />
          <span aria-hidden className="px-2 text-sm text-muted-foreground">
            -
          </span>
          <DateInput className="flex-1" variant="ghost" slot={"end"} />

          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <DatePickerContent>
          <RangeCalendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </DatePickerContent>
      </DateRangePicker>

      <DateRangePicker
        granularity="day"
        value={date}
        // @ts-expect-error RAC bug
        onChange={setDate}
        className="min-w-[320px] space-y-1"
      >
        <Label>Date range</Label>
        <FieldGroup>
          <DateInput variant="ghost" slot={"start"} />
          <span aria-hidden className="px-2 text-sm text-muted-foreground">
            -
          </span>
          <DateInput className="flex-1" variant="ghost" slot={"end"} />

          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <DatePickerContent>
          <RangeCalendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </RangeCalendar>
        </DatePickerContent>
      </DateRangePicker>
    </div>
  )
}
