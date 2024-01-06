import React from "react"
import { type DateValue } from "react-aria-components"

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

export function DatepickerDemo({ ...props }) {
  const [date, setDate] = React.useState<DateValue>()

  return (
    <DatePicker
      aria-label="Select Date"
      shouldCloseOnSelect={false}
      onChange={setDate}
      {...props}
    >
      <DatePickerButton date={date} />
      <DatePickerContent className="flex flex-col">
        <Calendar>
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
      </DatePickerContent>
    </DatePicker>
  )
}
export default DatepickerDemo
