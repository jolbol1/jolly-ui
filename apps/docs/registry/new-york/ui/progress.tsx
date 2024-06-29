"use client"

import * as React from "react"
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

interface ProgressProps extends AriaProgressBarProps {
  barClassName?: string
  fillClassName?: string
}

const Progress = ({
  className,
  barClassName,
  fillClassName,
  children,
  ...props
}: ProgressProps) => (
  <AriaProgressBar
    className={composeRenderProps(className, (className) =>
      cn("w-full", className)
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        {children}
        <div
          className={cn(
            "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
            barClassName
          )}
        >
          <div
            className={cn(
              "size-full flex-1 bg-primary transition-all",
              fillClassName
            )}
            style={{
              transform: `translateX(-${100 - (renderProps.percentage || 0)}%)`,
            }}
          />
        </div>
      </>
    ))}
  </AriaProgressBar>
)

export { Progress }
export type { ProgressProps }
