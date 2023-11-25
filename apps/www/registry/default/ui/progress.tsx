"use client"

import * as React from "react"
import { ProgressBar, ProgressBarProps } from "react-aria-components"

import { cnv } from "@/lib/utils"

const Progress = ({ className, children, ...props }: ProgressBarProps) => (
  <ProgressBar
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
)

export { Progress }
