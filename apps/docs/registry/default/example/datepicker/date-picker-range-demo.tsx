import React from "react"
import { parseDate } from "@internationalized/date"

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
  DateRangePickerButton,
} from "@/registry/default/ui/date-picker"

export function DatepickerDemo({ ...props }) {
  let [date, setDate] = React.useState({
    start: parseDate("2024-01-20"),
    end: parseDate("2024-02-09"),
  })

  return (
    <DateRangePicker
      aria-label="Select Date"
      shouldCloseOnSelect={false}
      value={date}
      onChange={setDate}
      {...props}
    >
      <DateRangePickerButton className="w-[300px]" date={date} />
      <DatePickerContent>
        <RangeCalendar pageBehavior="visible">
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
        </RangeCalendar>
      </DatePickerContent>
    </DateRangePicker>
  )
}
export default DatepickerDemo
