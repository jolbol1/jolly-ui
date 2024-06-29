import { getLocalTimeZone, isWeekend, today } from "@internationalized/date"
import { DateValue, Text, useLocale } from "react-aria-components"

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/registry/new-york/ui/calendar"

export default function RangeCalendarUnavailable() {
  let now = today(getLocalTimeZone())
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ]

  let isDateUnavailable = (date: DateValue) =>
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0
    )
  return (
    <RangeCalendar
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
      aria-label="Trip dates"
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
    </RangeCalendar>
  )
}
