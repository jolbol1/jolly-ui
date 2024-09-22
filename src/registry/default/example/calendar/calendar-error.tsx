"use client"

import React from "react"
import { getLocalTimeZone, isWeekend, today } from "@internationalized/date"
import { Text, useLocale } from "react-aria-components"

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/default/ui/calendar"

export default function CalendarError() {
  let [date, setDate] = React.useState(today(getLocalTimeZone()))
  let { locale } = useLocale()
  let isInvalid = isWeekend(date, locale)

  return (
    <Calendar
      minValue={today(getLocalTimeZone())}
      aria-label="Appointment date"
      value={date}
      onChange={setDate}
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
          We are closed on weekends.
        </Text>
      )}
    </Calendar>
  )
}
