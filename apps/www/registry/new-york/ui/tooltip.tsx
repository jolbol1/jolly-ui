"use client"

import * as React from "react"
import {
  Tooltip,
  TooltipTrigger,
  type TooltipProps,
} from "react-aria-components"

import { cnv } from "@/lib/utils"

const _TooltipTrigger = TooltipTrigger

const _Tooltip = ({ className, offset = 4, ...props }: TooltipProps) => (
  <Tooltip
    offset={offset}
    className={(values) =>
      cnv(
        values,
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    }
    {...props}
  />
)

export { _Tooltip as Tooltip, _TooltipTrigger as TooltipTrigger }
