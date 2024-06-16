import { getLocalTimeZone } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  DatePicker as AriaDatePicker,
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue as AriaDateValue,
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { Popover } from "@/registry/default/ui/popover"

const DatePicker = AriaDatePicker

const DateRangePicker = AriaDateRangePicker

export interface DatePickerButtonProps extends AriaGroupProps {
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

export interface DateRangePickerButtonProps extends AriaGroupProps {
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

const DatePickerContent = ({
  className,
  popoverClassName,
  ...props
}: AriaDialogProps & { popoverClassName?: AriaPopoverProps["className"] }) => (
  <Popover
    className={composeRenderProps(popoverClassName, (className) =>
      cn("w-auto p-3", className)
    )}
  >
    <AriaDialog
      className={cn(
        "flex w-full flex-col space-y-4 outline-none sm:flex-row sm:space-x-4 sm:space-y-0",
        className
      )}
      {...props}
    />
  </Popover>
)

export {
  DatePicker,
  DatePickerButton,
  DatePickerContent,
  DateRangePicker,
  DateRangePickerButton,
}
