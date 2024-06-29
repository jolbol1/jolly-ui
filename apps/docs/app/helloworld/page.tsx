"use client"

import React from "react"
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
} from "@/registry/default/ui/calendar"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <RangeCalendarDemo />
      <RangeCalendarMultiMonth />
      <RangeCalendarValidation />
      <RangeCalendarUnavailable />
      <RangeCalendarNonContinuous />
      <RangeCalendarError />
      <RangeCalendarDisabled />
      <RangeCalendarReadonly />
    </div>
  )
}

export function RangeCalendarDemo() {
  return (
    <RangeCalendar aria-label="Trip dates">
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

export function RangeCalendarMultiMonth() {
  return (
    <RangeCalendar aria-label="Trip dates" visibleDuration={{ months: 3 }}>
      <CalendarHeading />
      <div style={{ display: "flex", gap: 30, overflow: "auto" }}>
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
        <CalendarGrid offset={{ months: 1 }}>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
        <CalendarGrid offset={{ months: 2 }}>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
      </div>
    </RangeCalendar>
  )
}

export function RangeCalendarValidation() {
  return (
    <RangeCalendar minValue={today(getLocalTimeZone())} aria-label="Trip dates">
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

export function RangeCalendarUnavailable() {
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

export function RangeCalendarNonContinuous() {
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

export function RangeCalendarError() {
  let [range, setRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
  })
  let isInvalid = range.end.compare(range.start) > 7

  return (
    <RangeCalendar
      aria-label="Trip dates"
      value={range}
      onChange={setRange}
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

export function RangeCalendarDisabled() {
  return (
    <RangeCalendar isDisabled aria-label="Trip dates">
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

export function RangeCalendarReadonly() {
  return (
    <RangeCalendar
      isReadOnly
      value={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 }),
      }}
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
