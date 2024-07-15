"use client"

import * as React from "react"
import {
  DropZone as AriaDropZone,
  DropZoneProps as AriaDropZoneProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const DropZone = ({ className, ...props }: AriaDropZoneProps) => (
  <AriaDropZone
    className={composeRenderProps(className, (className) =>
      cn(
        "flex h-[150px] w-[300px] flex-col items-center justify-center gap-2 rounded-md border border-dashed text-sm ring-offset-background",
        /* Drop Target */
        "data-[drop-target]:border-solid data-[drop-target]:border-primary data-[drop-target]:bg-accent",
        /* Focus Visible */
        "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        className
      )
    )}
    {...props}
  />
)

export { DropZone }
