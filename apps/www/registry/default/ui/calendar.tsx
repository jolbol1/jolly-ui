"use client"

import * as React from "react"
import { getLocalTimeZone, today } from "@internationalized/date"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarCellProps,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridBodyProps,
  CalendarGridHeader,
  CalendarGridHeaderProps,
  CalendarGridProps,
  CalendarHeaderCell,
  CalendarHeaderCellProps,
  Heading,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"
import { buttonVariants } from "@/registry/default/ui/button-variants"

const _Calendar = Calendar

const _CalendarHeading = ({
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => (
  <header className="relative flex items-center justify-center pt-1" {...props}>
    <Heading className="text-sm font-medium" />
    <div className="flex items-center">
      <Button
        slot="next"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 data-[hovered]:opacity-100",
          "absolute right-1 text-popover-foreground"
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        slot="previous"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 data-[hovered]:opacity-100",
          "absolute left-1 text-popover-foreground"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
  </header>
)

const _CalendarGrid = ({ className, ...props }: CalendarGridProps) => (
  <CalendarGrid
    className={cn("mt-4 w-full border-collapse space-y-1", className)}
    {...props}
  />
)

const _CalendarGridHeader = ({
  className,
  ...props
}: CalendarGridHeaderProps) => (
  <CalendarGridHeader className={cn("[&>tr]:flex", className)} {...props} />
)

const _CalendarHeaderCell = ({
  className,
  ...props
}: CalendarHeaderCellProps) => (
  <CalendarHeaderCell
    className={cn(
      "w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground",
      className
    )}
    {...props}
  />
)

const _CalendarGridBody = ({ className, ...props }: CalendarGridBodyProps) => (
  <CalendarGridBody
    className={cn(
      "[&>tr>td]:p-0 [&>tr]:mt-2 [&>tr]:flex [&>tr]:w-full",
      className
    )}
    {...props}
  />
)

const _CalendarCell = ({ className, date, ...props }: CalendarCellProps) => (
  <CalendarCell
    className={(values) =>
      cnv(
        values,
        buttonVariants({ variant: "ghost" }),
        "h-9 w-9 p-0 font-normal data-[selected]:opacity-100",
        date.compare(today(getLocalTimeZone())) === 0 &&
          "bg-accent text-accent-foreground",
        values.isDisabled && "text-muted-foreground opacity-50",
        values.isSelected &&
          "bg-primary text-primary-foreground data-[hovered]:bg-primary data-[hovered]:text-primary-foreground data-[focused]:bg-primary data-[focused]:text-primary-foreground",
        values.isOutsideMonth &&
          "text-muted-foreground opacity-50 data-[selected]:bg-accent/50 data-[selected]:text-muted-foreground data-[selected]:opacity-30",

        className
      )
    }
    date={date}
    {...props}
  />
)

export {
  _Calendar as Calendar,
  _CalendarCell as CalendarCell,
  _CalendarGrid as CalendarGrid,
  _CalendarGridBody as CalendarGridBody,
  _CalendarGridHeader as CalendarGridHeader,
  _CalendarHeaderCell as CalendarHeaderCell,
  _CalendarHeading as CalendarHeading,
}
