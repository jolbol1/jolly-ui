"use client"

import * as React from "react"
import { ProgressBar } from "react-aria-components"

import { cnv } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressBar>,
  React.ComponentPropsWithoutRef<typeof ProgressBar>
>(({ className, children, ...props }, ref) => (
  <ProgressBar
    ref={ref}
    className={(values) =>
      cnv(
        values,
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <div
          className="h-full w-full flex-1 bg-primary transition-all"
          style={{
            transform: `translateX(-${100 - (values.percentage || 0)}%)`,
          }}
        />
      </>
    )}
  </ProgressBar>
))
Progress.displayName = "ProgressBar"

export { Progress }
