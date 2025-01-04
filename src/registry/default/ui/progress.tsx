"use client"

import * as React from "react"
import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { Label, labelVariants } from "./field"

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
}: ProgressProps & React.RefAttributes<HTMLDivElement>) => (
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

interface JollyProgressBarProps extends ProgressProps {
  label?: string
  showValue?: boolean
}

function JollyProgressBar({
  label,
  className,
  showValue = true,
  ...props
}: JollyProgressBarProps & React.RefAttributes<HTMLDivElement>) {
  return (
    <Progress
      className={composeRenderProps(className, (className) =>
        cn("group flex flex-col gap-2", className)
      )}
      {...props}
    >
      {({ valueText }) => (
        <div className="flex w-full justify-between">
          <Label>{label}</Label>
          {showValue && <span className={labelVariants()}>{valueText}</span>}
        </div>
      )}
    </Progress>
  )
}

export { Progress, JollyProgressBar }
export type { ProgressProps, JollyProgressBarProps }
