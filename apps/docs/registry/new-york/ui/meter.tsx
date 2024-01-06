"use client"

import * as React from "react"
import { Meter, MeterProps } from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

export interface _MeterProps extends MeterProps {
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
  <Meter className={(values) => cnv(values, className)} {...props}>
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <div
          className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
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
