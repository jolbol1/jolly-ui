"use client"

import * as React from "react"
import { Meter, MeterProps } from "react-aria-components"

import { cn } from "@/lib/utils"

interface _MeterProps extends MeterProps {
  barClassName?: string
  fillClassName?: string
}

const _Meter = ({
  className,
  barClassName,
  fillClassName,
  children,
  ...props
}: _MeterProps) => (
  <Meter
    className={(values) =>
      cn(
        "w-full",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <div
          className={cn(
            "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
            barClassName
          )}
        >
          <div
            className={cn(
              "h-full w-full flex-1 bg-primary transition-all",
              fillClassName
            )}
            style={{
              transform: `translateX(-${100 - (values.percentage || 0)}%)`,
            }}
          />
        </div>
      </>
    )}
  </Meter>
)

export { _Meter as Meter }
export type { _MeterProps as MeterProps }
