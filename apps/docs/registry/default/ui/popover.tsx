"use client"

import * as React from "react"
import {
  DialogTrigger as AriaDialogTrigger,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const PopoverTrigger = AriaDialogTrigger

const Popover = ({ className, offset = 4, ...props }: AriaPopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        "z-50 w-72 overflow-y-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        /* Entering */
        "data-[entering]:animate-in data-[entering]:fade-in-0",
        /* Exiting */
        "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
        /* Placement */
        "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
)

export { Popover, PopoverTrigger }
