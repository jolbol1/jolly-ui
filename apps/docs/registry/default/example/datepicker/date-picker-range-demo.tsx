import { CalendarIcon } from "lucide-react"

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
import { FieldGroup } from "@/registry/default/ui/field"

export function DatepickerDemo() {
  return (
    <DateRangePicker>
      <FieldGroup className="min-w-[300px]">
        <DateInput variant="ghost" slot="start" />
        <span aria-hidden className="px-2 text-sm text-muted-foreground">
          –
        </span>
        <DateInput className="flex-1" variant="ghost" slot="end" />
        <Button
          variant="ghost"
          size="icon"
          className="mr-1 size-6 data-[focus-visible]:ring-offset-0"
        >
          <CalendarIcon aria-hidden className="size-4" />
        </Button>
      </FieldGroup>
      <DatePickerContent>
        <RangeCalendar pageBehavior="visible">
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
  )
}
export default DatepickerDemo
