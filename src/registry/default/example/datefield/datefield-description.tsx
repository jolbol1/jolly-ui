"use client"

import { Text } from "react-aria-components"

import { DateField, DateInput } from "@/registry/default/ui/datefield"
import { Label } from "@/registry/default/ui/field"

export default function DateFieldDescription() {
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
