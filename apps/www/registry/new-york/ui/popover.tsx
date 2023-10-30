"use client"

import * as React from "react"
import { DialogTrigger, Popover as RaPopover } from "react-aria-components"

import { cnv } from "@/lib/utils"

const PopoverTrigger = DialogTrigger

const Popover = React.forwardRef<
  React.ElementRef<typeof RaPopover>,
  React.ComponentPropsWithoutRef<typeof RaPopover>
>(({ className, offset = 4, ...props }, ref) => (
  <RaPopover
    ref={ref}
    offset={offset}
    className={(values) =>
      cnv(
        values,
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    }
    {...props}
  />
))
Popover.displayName = "Popover"

export { Popover, PopoverTrigger }
