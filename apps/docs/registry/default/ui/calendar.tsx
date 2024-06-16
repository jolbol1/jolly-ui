"use client"

import * as React from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Button as AriaButton,
  Calendar as AriaCalendar,
  CalendarCell as AriaCalendarCell,
  CalendarCellProps as AriaCalendarCellProps,
  CalendarGrid as AriaCalendarGrid,
  CalendarGridBody as AriaCalendarGridBody,
  CalendarGridBodyProps as AriaCalendarGridBodyProps,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarGridHeaderProps as AriaCalendarGridHeaderProps,
  CalendarGridProps as AriaCalendarGridProps,
  CalendarHeaderCell as AriaCalendarHeaderCell,
  CalendarHeaderCellProps as AriaCalendarHeaderCellProps,
  Heading as AriaHeading,
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarStateContext as AriaRangeCalendarStateContext,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

const Calendar = AriaCalendar

const RangeCalendar = AriaRangeCalendar

const CalendarHeading = ({
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => (
  <header className="relative flex items-center justify-center pt-1" {...props}>
    <AriaHeading className="text-sm font-medium" />
    <div className="flex items-center">
      <AriaButton
        slot="next"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 data-[hovered]:opacity-100",
          "absolute right-1 text-popover-foreground"
        )}
      >
        <ChevronRight className="size-4" />
      </AriaButton>
      <AriaButton
        slot="previous"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 data-[hovered]:opacity-100",
          "absolute left-1 text-popover-foreground"
        )}
      >
        <ChevronLeft className="size-4" />
      </AriaButton>
    </div>
  </header>
)

const CalendarGrid = ({ className, ...props }: AriaCalendarGridProps) => (
  <AriaCalendarGrid
    className={cn("mt-4 w-full border-collapse space-y-1", className)}
    {...props}
  />
)

const CalendarGridHeader = ({
  className,
  ...props
}: AriaCalendarGridHeaderProps) => (
  <AriaCalendarGridHeader className={cn("[&>tr]:flex", className)} {...props} />
)

const CalendarHeaderCell = ({
  className,
  ...props
}: AriaCalendarHeaderCellProps) => (
  <AriaCalendarHeaderCell
    className={cn(
      "w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground",
      className
    )}
    {...props}
  />
)

const CalendarGridBody = ({
  className,
  ...props
}: AriaCalendarGridBodyProps) => (
  <AriaCalendarGridBody
    className={cn(
      "[&>tr>td]:p-0 [&>tr]:mt-2 [&>tr]:flex [&>tr]:w-full",
      "[&>tr>td:first-child>div]:rounded-l-md [&>tr>td:last-child>div]:rounded-r-md",
      className
    )}
    {...props}
  />
)

const CalendarCell = ({ className, date, ...props }: AriaCalendarCellProps) => {
  const isRange = Boolean(React.useContext(AriaRangeCalendarStateContext))
  return (
    <AriaCalendarCell
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          "inline-flex size-9 items-center justify-center whitespace-nowrap rounded-md p-0 text-sm font-normal ring-offset-background transition-colors",
          /* Hover */
          "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
          /* Disabled */
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          /* Selected */
          "data-[selected]:opacity-100",
          /* Logic */
          date.compare(today(getLocalTimeZone())) === 0 &&
            "bg-accent text-accent-foreground",
          renderProps.isDisabled && "text-muted-foreground opacity-50",
          renderProps.isFocusVisible &&
            renderProps.isFocused &&
            "outline-none ring-2 ring-ring ring-offset-2",
          renderProps.isSelected &&
            isRange &&
            "rounded-none bg-accent text-accent-foreground",
          ((renderProps.isSelected && !isRange) ||
            renderProps.isSelectionStart ||
            renderProps.isSelectionEnd) &&
            "rounded-md bg-primary text-primary-foreground data-[focused]:bg-primary data-[hovered]:bg-primary data-[focused]:text-primary-foreground data-[hovered]:text-primary-foreground",
          renderProps.isOutsideMonth &&
            "text-muted-foreground opacity-50 data-[selected]:bg-accent/50 data-[selected]:text-muted-foreground data-[selected]:opacity-30",
          className
        )
      )}
      date={date}
      {...props}
    />
  )
}

export {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
  RangeCalendar,
}
