"use client"

import * as React from "react"
import {
  Meter as AriaMeter,
  MeterProps as AriaMeterProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

interface MeterProps extends AriaMeterProps {
  barClassName?: string
  fillClassName?: string
}

const Meter = ({
  className,
  barClassName,
  fillClassName,
  children,
  ...props
}: MeterProps) => (
  <AriaMeter
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
            "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
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
  </AriaMeter>
)

export { Meter }
export type { MeterProps }
