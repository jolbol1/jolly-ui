"use client"

import React from "react"
import {
  getLocalTimeZone,
  isWeekend,
  parseAbsoluteToLocal,
  parseZonedDateTime,
  today,
} from "@internationalized/date"
import { CalendarIcon } from "lucide-react"
import { DateValue, Form, Text, useLocale } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
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
  DatePickerContent,
} from "@/registry/default/ui/date-picker"
import { DateInput, DateSegment } from "@/registry/default/ui/datefield"
import { FieldError, FieldGroup, Label } from "@/registry/default/ui/field"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <DatepickerDemo />
      <DatepickerTimezone />
      <DatepickerGranularity />
      <DatepickerValidation />
      <DatepickerMinMax />
      <DatepickerUnavailable />
      <DatepickerCustomValidation />
      <DatepickerDescription />
    </div>
  )
}

export function DatepickerDemo() {
  return (
    <DatePicker className="min-w-[208px] space-y-1">
      <Label>Date</Label>
      <FieldGroup>
        <DateInput className="flex-1" variant="ghost" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <DatePickerContent>
        <Calendar>
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
      </DatePickerContent>
    </DatePicker>
  )
}

export function DatepickerTimezone() {
  return (
    <DatePicker
      defaultValue={parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")}
      className="min-w-[208px] space-y-1"
    >
      <Label>Date</Label>
      <FieldGroup>
        <DateInput className="flex-1" variant="ghost" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <DatePickerContent>
        <Calendar>
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
      </DatePickerContent>
    </DatePicker>
  )
}

export function DatepickerGranularity() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  )

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        value={date}
        onChange={setDate}
        granularity="second"
        className="min-w-[208px] space-y-1"
      >
        <Label>Date and Time</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <DatePickerContent>
          <Calendar>
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
        </DatePickerContent>
      </DatePicker>

      <DatePicker
        value={date}
        onChange={setDate}
        granularity="day"
        className="min-w-[208px] space-y-1"
      >
        <Label>Day</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <DatePickerContent>
          <Calendar>
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
        </DatePickerContent>
      </DatePicker>
    </div>
  )
}

export function DatepickerValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <DatePicker
        isRequired
        className="group min-w-[208px] flex flex-col gap-2"
      >
        <Label>Appointment Date</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <FieldError />
        <DatePickerContent>
          <Calendar>
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
        </DatePickerContent>
      </DatePicker>
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}

export function DatepickerMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <DatePicker
        minValue={today(getLocalTimeZone())}
        className="group min-w-[208px] flex flex-col gap-2"
      >
        <Label>Appointment Date</Label>
        <FieldGroup>
          <DateInput className="flex-1" variant="ghost" />
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
          >
            <CalendarIcon aria-hidden className="size-4" />
          </Button>
        </FieldGroup>
        <FieldError />
        <DatePickerContent>
          <Calendar>
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
        </DatePickerContent>
      </DatePicker>
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}

export function DatepickerUnavailable() {
  let now = today(getLocalTimeZone())
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ]

  let { locale } = useLocale()
  let isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]!) >= 0 && date.compare(interval[1]!) <= 0
    )

  return (
    <DatePicker
      minValue={today(getLocalTimeZone())}
      className="group min-w-[208px] flex flex-col gap-2"
      isDateUnavailable={isDateUnavailable}
    >
      <Label>Appointment Date</Label>
      <FieldGroup>
        <DateInput className="flex-1" variant="ghost" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <DatePickerContent>
        <Calendar>
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
      </DatePickerContent>
    </DatePicker>
  )
}

export function DatepickerCustomValidation() {
  let { locale } = useLocale()

  return (
    <DatePicker
      className="group min-w-[208px] flex flex-col gap-2"
      validate={(date) =>
        date && isWeekend(date, locale) ? "We are closed on weekends." : null
      }
    >
      <Label>Appointment Date</Label>
      <FieldGroup>
        <DateInput className="flex-1" variant="ghost" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <FieldError />
      <DatePickerContent>
        <Calendar>
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
      </DatePickerContent>
    </DatePicker>
  )
}

export function DatepickerDescription() {
  return (
    <DatePicker className="group min-w-[208px] flex flex-col gap-2">
      <Label>Appointment Date</Label>
      <FieldGroup className="min-w-[208px] w-fit">
        <DateInput className="flex-1" variant="ghost" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select a weekday between 9 AM and 5 PM.
      </Text>
      <FieldError />
      <DatePickerContent>
        <Calendar>
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
      </DatePickerContent>
    </DatePicker>
  )
}
