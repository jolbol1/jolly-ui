"use client"

import * as React from "react"
import { ProgressBar } from "react-aria-components"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressBar>,
  React.ComponentPropsWithoutRef<typeof ProgressBar>
>(({ className, ...props }, ref) => (
  <ProgressBar
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    {({ percentage }) => (
      <>
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (percentage || 0)}%)` }}
        />
      </>
    )}
  </ProgressBar>
))
Progress.displayName = "ProgressBar"

export { Progress }
