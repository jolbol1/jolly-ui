import React from "react"
import { getLocalTimeZone } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  type DateValue as AriaDateValue,
} from "react-aria-components"

import { cn } from "@/lib/utils"
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

interface DatePickerButtonProps extends AriaGroupProps {
  date?: AriaDateValue
}

const DatePickerButton = ({ date, ...props }: DatePickerButtonProps) => (
  <AriaGroup {...props}>
    <Button
      variant="outline"
      className={cn(
        "w-[280px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 size-4" />

      {date ? (
        format(date?.toDate(getLocalTimeZone()), "PPP")
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  </AriaGroup>
)

export function DatepickerDemo({ ...props }) {
  const [date, setDate] = React.useState<AriaDateValue>()

  return (
    <DatePicker
      aria-label="Select Date"
      shouldCloseOnSelect={false}
      onChange={setDate}
      {...props}
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
  )
}
export default DatepickerDemo
