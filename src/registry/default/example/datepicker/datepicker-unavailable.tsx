"use client"

import { getLocalTimeZone, isWeekend, today } from "@internationalized/date"
import { CalendarIcon } from "lucide-react"
import { DateValue, useLocale } from "react-aria-components"

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

export default function DatepickerUnavailable() {
  let now = today(getLocalTimeZone())
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ]

  let { locale } = useLocale()
  let isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0
    )

  return (
    <DatePicker
      minValue={today(getLocalTimeZone())}
      className="group flex min-w-[208px] flex-col gap-2"
      isDateUnavailable={isDateUnavailable}
    >
      <Label>Appointment Date</Label>
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
  )
}
