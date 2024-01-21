import { getLocalTimeZone } from "@internationalized/date"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import {
  DatePicker,
  DateRangePicker,
  DateRangePickerProps,
  DateValue,
  Dialog,
  DialogProps,
  Group,
  GroupProps,
  PopoverProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { Popover } from "@/registry/new-york/ui/popover"

const _DatePicker = DatePicker

const _DateRangePicker = DateRangePicker

export interface _DatePickerButtonProps extends GroupProps {
  date?: DateValue
}

const _DatePickerButton = ({ date, ...props }: _DatePickerButtonProps) => (
  <Group {...props}>
    <Button
      variant="outline"
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />

      {date ? (
        format(date?.toDate(getLocalTimeZone()), "PPP")
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  </Group>
)

export interface _DateRangePickerButtonProps extends GroupProps {
  date?: DateRangePickerProps<DateValue>["value"]
}

const _DateRangePickerButton = ({
  date,
  ...props
}: _DateRangePickerButtonProps) => (
  <Group {...props}>
    <Button
      variant="outline"
      className={cn(
        "w-[240px] justify-start text-left font-normal",
        !date && "text-muted-foreground"
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4" />

      {date?.end ? (
        <>
          {format(date.start.toDate(getLocalTimeZone()), "LLL dd, y")} -{" "}
          {format(date.end.toDate(getLocalTimeZone()), "LLL dd, y")}
        </>
      ) : (
        <span>Pick a date</span>
      )}
    </Button>
  </Group>
)

const _DatePickerContent = ({
  className,
  popoverClassName,
  ...props
}: DialogProps & { popoverClassName?: PopoverProps["className"] }) => (
  <Popover
    className={(values) =>
      cn(
        "w-auto p-3",
        typeof popoverClassName === "function"
          ? popoverClassName(values)
          : popoverClassName
      )
    }
  >
    <Dialog
      className={cn(
        "flex w-full flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
        className
      )}
      {...props}
    />
  </Popover>
)

export {
  _DatePicker as DatePicker,
  _DatePickerButton as DatePickerButton,
  _DatePickerContent as DatePickerContent,
  _DateRangePickerButton as DateRangePickerButton,
  _DateRangePicker as DateRangePicker,
}
