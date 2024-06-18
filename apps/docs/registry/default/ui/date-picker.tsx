import {
  DatePicker as AriaDatePicker,
  DateRangePicker as AriaDateRangePicker,
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Popover } from "@/registry/default/ui/popover"

const DatePicker = AriaDatePicker

const DateRangePicker = AriaDateRangePicker

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

export { DatePicker, DatePickerContent, DateRangePicker }
