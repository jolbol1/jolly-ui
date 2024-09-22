"use client"

import { Time } from "@internationalized/date"
import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { DateInput, TimeField } from "@/registry/new-york/ui/datefield"
import { FieldError, Label } from "@/registry/new-york/ui/field"

export default function TimeFieldMinMax() {
  return (
    <Form className="flex flex-col gap-2">
      <TimeField
        name="time"
        minValue={new Time(9)}
        maxValue={new Time(17)}
        defaultValue={new Time(8)}
        className={"group"}
      >
        <Label>Meeting time</Label>
        <DateInput className={"w-fit min-w-[100px]"} />
        <FieldError />
      </TimeField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
