"use client"

import * as React from "react"
import { DialogTrigger, Popover, PopoverProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const PopoverTrigger = DialogTrigger

const _Popover = ({ className, offset = 4, ...props }: PopoverProps) => (
  <Popover
    offset={offset}
    className={(values) =>
      cn(
        "z-50 w-72 overflow-y-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  />
)

export { _Popover as Popover, PopoverTrigger }
