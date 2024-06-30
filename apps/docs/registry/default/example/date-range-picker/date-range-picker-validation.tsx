import { CalendarIcon } from "lucide-react"
import { Form } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
} from "@/registry/default/ui/calendar"
import {
  DatePickerContent,
  DateRangePicker,
} from "@/registry/default/ui/date-picker"
import { DateInput } from "@/registry/default/ui/datefield"
import { FieldError, FieldGroup, Label } from "@/registry/default/ui/field"

export default function DateRangePickerValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <DateRangePicker
        startName="startDate"
        endName="endDate"
        isRequired
        className="group min-w-[320px] space-y-1"
      >
        <Label>Trip dates</Label>
        <FieldGroup>
          <DateInput variant="ghost" slot={"start"} />
          <span aria-hidden className="px-2 text-sm text-muted-foreground">
            -
          </span>
          <DateInput className="flex-1" variant="ghost" slot={"end"} />

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
          <RangeCalendar>
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
        </DatePickerContent>
      </DateRangePicker>
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}
