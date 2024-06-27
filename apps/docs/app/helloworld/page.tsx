"use client"

import React from "react"
import {
  CalendarDate,
  getLocalTimeZone,
  parseAbsoluteToLocal,
  parseZonedDateTime,
  today,
} from "@internationalized/date"
import { Form, Text } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  DateField,
  DateInput,
  DateSegment,
} from "@/registry/default/ui/datefield"
import { FieldError, Label } from "@/registry/default/ui/field"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <DateFieldDemo />
      <DateFieldTimeZone />
      <DateFieldGranularity />
      <DateFieldValidation />
      <DateFieldValidationMinMax />
      <DateFieldDescription />
    </div>
  )
}

function DateFieldDemo() {
  return (
    <DateField className={"min-w-[150px] space-y-1"}>
      <Label>Birth date</Label>
      <DateInput />
    </DateField>
  )
}

function DateFieldTimeZone() {
  return (
    <div className="flex flex-col gap-2">
      <DateField
        defaultValue={parseZonedDateTime(
          "2022-11-07T00:45[America/Los_Angeles]"
        )}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Event date</Label>
        <DateInput />
      </DateField>
      <DateField
        defaultValue={parseAbsoluteToLocal("2021-11-07T07:45:00Z")}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Event date</Label>
        <DateInput />
      </DateField>
    </div>
  )
}

function DateFieldGranularity() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  )
  return (
    <div className="flex flex-col gap-2">
      <DateField
        value={date}
        onChange={setDate}
        granularity="second"
        defaultValue={parseZonedDateTime(
          "2022-11-07T00:45[America/Los_Angeles]"
        )}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Date and Time</Label>
        <DateInput />
      </DateField>
      <DateField
        value={date}
        onChange={setDate}
        granularity="day"
        defaultValue={parseZonedDateTime(
          "2022-11-07T00:45[America/Los_Angeles]"
        )}
        className={"min-w-[150px] space-y-1"}
      >
        <Label>Date</Label>
        <DateInput />
      </DateField>
    </div>
  )
}

function DateFieldValidation() {
  return (
    <Form>
      <DateField isRequired className={"min-w-[150px] space-y-1"}>
        <Label>Appointment date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button className="mt-1" type="submit">
        Submit
      </Button>
    </Form>
  )
}

function DateFieldValidationMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <DateField
        minValue={today(getLocalTimeZone())}
        isRequired
        className={"flex min-w-[150px] flex-col gap-2"}
      >
        <Label>Appointment date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}

function DateFieldDescription() {
  return (
    <DateField granularity="hour" isRequired className={"flex flex-col gap-2"}>
      <Label>Appointment date</Label>
      <DateInput className={"w-[180px]"} />
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select a weekday between 9 AM and 5 PM.
      </Text>
    </DateField>
  )
}
