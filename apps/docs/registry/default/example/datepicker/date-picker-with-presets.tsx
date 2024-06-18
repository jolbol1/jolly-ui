"use client"

import * as React from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import { CalendarIcon } from "lucide-react"
import { DateValue } from "react-aria-components"

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
import { FieldGroup } from "@/registry/default/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<DateValue>()

  return (
    <DatePicker value={date} onChange={setDate} className="min-w-[208px]">
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
      <DatePickerContent
        className="sm:flex-col sm:space-x-0 sm:space-y-1"
        popoverClassName="p-2"
      >
        <Select
          placeholder="Select"
          aria-label="Quick Options"
          onSelectionChange={(value) =>
            setDate(
              today(getLocalTimeZone()).add({
                days: parseInt(value.toString()),
              })
            )
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectPopover placement="bottom">
            <SelectContent>
              <SelectItem id="0">Today</SelectItem>
              <SelectItem id="1">Tomorrow</SelectItem>
              <SelectItem id="3">In 3 days</SelectItem>
              <SelectItem id="7">In a week</SelectItem>
            </SelectContent>
          </SelectPopover>
        </Select>
        <div className="rounded-md border p-3">
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
        </div>
      </DatePickerContent>
    </DatePicker>
  )
}
export default DatePickerWithPresets
