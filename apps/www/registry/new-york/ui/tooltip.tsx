"use client"

import * as React from "react"
import {
  Tooltip as RaTooltip,
  TooltipTrigger as RaTooltipTrigger,
  type TooltipProps as RaTooltipProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const TooltipTrigger = RaTooltipTrigger

export interface TooltipProps extends RaTooltipProps {
  className?: string
}
const Tooltip = React.forwardRef<
  React.ElementRef<typeof RaTooltip>,
  TooltipProps
>(({ className, offset = 4, ...props }, ref) => (
  <RaTooltip
    ref={ref}
    offset={offset}
    className={cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
Tooltip.displayName = "Tooltip"

export { Tooltip, TooltipTrigger }