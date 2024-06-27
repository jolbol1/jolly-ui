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
  useLocale,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button"

const Calendar = AriaCalendar

const RangeCalendar = AriaRangeCalendar

const CalendarHeading = (props: React.HTMLAttributes<HTMLElement>) => {
  let { direction } = useLocale()

  return (
    <header className="flex w-full items-center gap-1 px-1 pb-4" {...props}>
      <AriaButton
        slot="previous"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50",
          /* Hover */
          "data-[hovered]:opacity-100"
        )}
      >
        {direction === "rtl" ? (
          <ChevronRight aria-hidden className="size-4" />
        ) : (
          <ChevronLeft aria-hidden className="size-4" />
        )}
      </AriaButton>
      <AriaHeading className="grow text-center text-sm font-medium" />
      <AriaButton
        slot="next"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50",
          /* Hover */
          "data-[hovered]:opacity-100"
        )}
      >
        {direction === "rtl" ? (
          <ChevronLeft aria-hidden className="size-4" />
        ) : (
          <ChevronRight aria-hidden className="size-4" />
        )}
      </AriaButton>
    </header>
  )
}

const CalendarGrid = ({ className, ...props }: AriaCalendarGridProps) => (
  <AriaCalendarGrid
    className={cn(
      " border-separate border-spacing-x-0 border-spacing-y-1 ",
      className
    )}
    {...props}
  />
)

const CalendarGridHeader = ({
  className,
  ...props
}: AriaCalendarGridHeaderProps) => <AriaCalendarGridHeader {...props} />

const CalendarHeaderCell = ({
  className,
  ...props
}: AriaCalendarHeaderCellProps) => (
  <AriaCalendarHeaderCell
    className="w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground"
    {...props}
  />
)

const CalendarGridBody = ({
  className,
  ...props
}: AriaCalendarGridBodyProps) => (
  <AriaCalendarGridBody className={cn("[&>tr>td]:p-0 ")} {...props} />
)

const CalendarCell = ({ className, ...props }: AriaCalendarCellProps) => {
  const isRange = Boolean(React.useContext(AriaRangeCalendarStateContext))
  return (
    <AriaCalendarCell
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          buttonVariants({ variant: "ghost" }),
          "relative flex size-9 items-center justify-center p-0 text-sm font-normal",
          /* Disabled */
          renderProps.isDisabled && "text-muted-foreground opacity-50",
          /* Selected */
          renderProps.isSelected &&
            "bg-primary text-primary-foreground data-[focused]:bg-primary  data-[focused]:text-primary-foreground",
          /* Hover */
          renderProps.isHovered &&
            renderProps.isSelected &&
            (renderProps.isSelectionStart ||
              renderProps.isSelectionEnd ||
              !isRange) &&
            "data-[hovered]:bg-primary data-[hovered]:text-primary-foreground",
          /* Selection Start/End */
          renderProps.isSelected &&
            isRange &&
            !renderProps.isSelectionStart &&
            !renderProps.isSelectionEnd &&
            "rounded-none bg-accent text-accent-foreground",
          /* Outside Month */
          renderProps.isOutsideMonth &&
            "text-muted-foreground opacity-50 data-[selected]:bg-accent/50 data-[selected]:text-muted-foreground data-[selected]:opacity-30",
          /* Current Date */
          renderProps.date.compare(today(getLocalTimeZone())) === 0 &&
            !renderProps.isSelected &&
            "bg-accent text-accent-foreground",
          /* Unavailable Date */
          renderProps.isUnavailable && "cursor-default text-destructive ",
          renderProps.isInvalid &&
            "bg-destructive text-destructive-foreground data-[focused]:bg-destructive data-[hovered]:bg-destructive data-[focused]:text-destructive-foreground data-[hovered]:text-destructive-foreground",
          className
        )
      )}
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
