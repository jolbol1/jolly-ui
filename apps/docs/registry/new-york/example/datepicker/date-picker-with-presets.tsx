"use client"

import * as React from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import { DateValue } from "react-aria-components"

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/new-york/ui/calendar"
import {
  DatePicker,
  DatePickerButton,
  DatePickerContent,
} from "@/registry/new-york/ui/date-picker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<DateValue>()

  return (
    <DatePicker
      aria-label="Select Date"
      value={date}
      shouldCloseOnSelect={false}
    >
      <DatePickerButton date={date} />
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
          <Calendar value={date}>
            <CalendarHeading />
            <CalendarGrid>
              <CalendarGridHeader>
                {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => (
                  <>
                    <CalendarCell date={date} />
                  </>
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </div>
      </DatePickerContent>
    </DatePicker>
  )
}
export default DatePickerWithPresets
