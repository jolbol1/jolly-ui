import { getLocalTimeZone, today } from "@internationalized/date"

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/new-york/ui/calendar"

export default function CalendarReadonly() {
  return (
    <Calendar
      value={today(getLocalTimeZone())}
      isReadOnly
      aria-label="Appointment date"
    >
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
  )
}
