import { getLocalTimeZone } from "@internationalized/date"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import {
  DatePicker,
  DateValue,
  Dialog,
  DialogProps,
  Group,
  GroupProps,
  PopoverProps,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { Popover } from "@/registry/default/ui/popover"

const _DatePicker = DatePicker

export interface _DatePickerButtonProps extends GroupProps {
  date?: DateValue
}

const _DatePickerButton = ({ date, ...props }: _DatePickerButtonProps) => (
  <Group {...props}>
    <Button
      variant="outline"
      className={cn(
        "w-[280px] justify-start text-left font-normal",
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

const _DatePickerContent = ({
  className,
  popoverClassName,
  ...props
}: DialogProps & { popoverClassName?: PopoverProps["className"] }) => (
  <Popover className={(values) => cnv(values, "w-auto p-3", popoverClassName)}>
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
}
