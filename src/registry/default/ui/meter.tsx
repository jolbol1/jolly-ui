"use client"

import * as React from "react"
import {
  Meter as AriaMeter,
  MeterProps as AriaMeterProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { Label, labelVariants } from "./field"

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
  </AriaMeter>
)

interface JollyMeterProps extends MeterProps {
  label?: string
  showValue?: boolean
}

function JollyMeter({
  label,
  className,
  showValue = true,
  ...props
}: JollyMeterProps) {
  return (
    <Meter
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
    </Meter>
  )
}

export { Meter, JollyMeter }
export type { MeterProps, JollyMeterProps }
