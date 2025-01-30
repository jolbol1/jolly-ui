import React from "react"
import { parseAbsoluteToLocal } from "@internationalized/date"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/default/ui/calendar"
import {
  DatePicker,
  DatePickerContent,
} from "@/registry/default/ui/date-picker"
import { DateInput } from "@/registry/default/ui/datefield"
import { FieldGroup, Label } from "@/registry/default/ui/field"

export default function DatepickerGranularity() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  )

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        value={date}
        // @ts-expect-error RAC bug
        onChange={setDate}
        granularity="second"
        className="min-w-[208px] space-y-1"
      >
        <Label>Date and Time</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <DatePickerContent>
          <Calendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </DatePickerContent>
      </DatePicker>

      <DatePicker
        value={date}
        // @ts-expect-error RAC bug
        onChange={setDate}
        granularity="day"
        className="min-w-[208px] space-y-1"
      >
        <Label>Day</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <DatePickerContent>
          <Calendar>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => <CalendarCell date={date} />}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </DatePickerContent>
      </DatePicker>
    </div>
  )
}
