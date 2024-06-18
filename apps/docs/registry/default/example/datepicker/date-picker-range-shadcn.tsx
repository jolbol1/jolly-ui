import React from "react"
import { getLocalTimeZone, parseDate } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue as AriaDateValue,
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
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

import { Button } from "../../ui/button"

interface DateRangePickerButtonProps extends AriaGroupProps {
  date?: AriaDateRangePickerProps<AriaDateValue>["value"]
}

const DateRangePickerButton = ({
  date,
  ...props
}: DateRangePickerButtonProps) => (
  <AriaGroup {...props}>
    <Button
      variant="outline"
      className={cn(
        "w-[280px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 size-4" />

      {date?.end ? (
        <>
          {format(date.start.toDate(getLocalTimeZone()), "LLL dd, y")} -{" "}
          {format(date.end.toDate(getLocalTimeZone()), "LLL dd, y")}
        </>
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  </AriaGroup>
)

export function DatepickerDemo({ ...props }) {
  let [date, setDate] = React.useState({
    start: parseDate("2024-01-20"),
    end: parseDate("2024-02-09"),
  })

  return (
    <DateRangePicker
      aria-label="Select Date"
      shouldCloseOnSelect={false}
      value={date}
      onChange={setDate}
      {...props}
    >
      <DateRangePickerButton className="w-[300px]" date={date} />
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
