"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { Text } from "react-aria-components"

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
import { FieldGroup, Label } from "@/registry/new-york/ui/field"

export default function DateRangePickerDescription() {
  return (
    <DateRangePicker className="min-w-[320px] space-y-1">
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
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select your vacation dates.
      </Text>
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
  )
}
