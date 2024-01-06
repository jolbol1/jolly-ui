"use client"

import React from "react"
import { type DateValue } from "react-aria-components"

import { Card } from "@/components/card"
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
import { Label } from "@/registry/default/ui/label"

// TODO: Better Example

export function CardDatePicker() {
  const [date, setDate] = React.useState<DateValue>()

  return (
    <Card className="flex flex-col items-center gap-2 p-4">
      <div className="flex flex-col gap-2">
        <Label>Date</Label>
        <DatePicker
          aria-label="Select Date"
          shouldCloseOnSelect={false}
          onChange={setDate}
        >
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
      </div>
    </Card>
  )
}
