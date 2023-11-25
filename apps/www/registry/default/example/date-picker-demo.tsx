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
} from "@/registry/default/ui/calendar"
import {
  DatePicker,
  DatePickerButton,
  DatePickerContent,
} from "@/registry/default/ui/date-picker"

export default function DatepickerDemo({ ...props }) {
  const [date, setDate] = React.useState<DateValue>()

  return (
    <DatePicker shouldCloseOnSelect={false} onChange={setDate} {...props}>
      <DatePickerButton date={date} />
      <DatePickerContent>
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
