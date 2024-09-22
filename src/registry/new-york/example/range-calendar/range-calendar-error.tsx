"use client"

import React from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import { Text } from "react-aria-components"

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/registry/new-york/ui/calendar"

export default function RangeCalendarError() {
  let [range, setRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
  })
  let isInvalid = range.end.compare(range.start) > 7

  return (
    <RangeCalendar
      aria-label="Trip dates"
      value={range}
      onChange={(val) => val && setRange(val)}
      isInvalid={isInvalid}
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
      {isInvalid && (
        <Text className="text-sm text-destructive" slot="errorMessage">
          Maximum stay duration is 1 week
        </Text>
      )}
    </RangeCalendar>
  )
}
