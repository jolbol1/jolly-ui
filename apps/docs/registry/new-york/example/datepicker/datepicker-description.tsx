import { CalendarIcon } from "@radix-ui/react-icons"
import { Text } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/registry/new-york/ui/calendar"
import {
  DatePicker,
  DatePickerContent,
} from "@/registry/new-york/ui/date-picker"
import { DateInput } from "@/registry/new-york/ui/datefield"
import { FieldError, FieldGroup, Label } from "@/registry/new-york/ui/field"

export default function DatepickerDescription() {
  return (
    <DatePicker className="group flex min-w-[208px] flex-col gap-2">
      <Label>Appointment Date</Label>
      <FieldGroup className="w-fit min-w-[208px]">
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
