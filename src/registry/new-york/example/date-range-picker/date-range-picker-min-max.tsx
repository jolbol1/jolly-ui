"use client"

import { getLocalTimeZone, today } from "@internationalized/date"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/registry/new-york/ui/calendar"
import {
  DatePickerContent,
  DateRangePicker,
} from "@/registry/new-york/ui/date-picker"
import { DateInput } from "@/registry/new-york/ui/datefield"
import { FieldError, FieldGroup, Label } from "@/registry/new-york/ui/field"

export default function DateRangePickerMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <DateRangePicker
        minValue={today(getLocalTimeZone())}
        startName="startDate"
        endName="endDate"
        isRequired
        className="group min-w-[320px] space-y-1"
      >
        <Label>Trip dates</Label>
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
        <FieldError />
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
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}
