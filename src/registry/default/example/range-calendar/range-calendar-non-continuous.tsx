"use client"

import { isWeekend } from "@internationalized/date"
import { useLocale } from "react-aria-components"

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/registry/default/ui/calendar"

export default function RangeCalendarNonContinuous() {
  let { locale } = useLocale()

  return (
    <RangeCalendar
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
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
