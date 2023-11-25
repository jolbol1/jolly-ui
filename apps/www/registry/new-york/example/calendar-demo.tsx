"use client"

import * as React from "react"

import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/new-york/ui/calendar"

export default function CalendarDemo() {
  return (
    <Calendar className="rounded-md border p-3">
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
  )
}
