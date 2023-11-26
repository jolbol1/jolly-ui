"use client"

import { Separator, SeparatorProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const _Separator = ({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) => (
  <Separator
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
)

export { _Separator as Separator }
