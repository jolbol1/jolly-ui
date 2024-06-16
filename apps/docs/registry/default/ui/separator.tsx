"use client"

import {
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Separator = ({
  className,
  orientation = "horizontal",
  ...props
}: AriaSeparatorProps) => (
  <AriaSeparator
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className
    )}
    {...props}
  />
)

export { Separator }
