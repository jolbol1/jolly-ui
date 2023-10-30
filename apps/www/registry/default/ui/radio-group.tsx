"use client"

import * as React from "react"
import { Circle } from "lucide-react"
import {
  Radio as RaRadio,
  RadioGroup as RaRadioGroup,
} from "react-aria-components"

import { cnv } from "@/lib/utils"

import { labelVariants } from "./label"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RaRadioGroup>,
  React.ComponentPropsWithoutRef<typeof RaRadioGroup>
>(({ className, ...props }, ref) => {
  return (
    <RaRadioGroup
      className={(values) => cnv(values, "grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = "RadioGroup"

const Radio = React.forwardRef<
  React.ElementRef<typeof RaRadio>,
  React.ComponentPropsWithoutRef<typeof RaRadio> & { showRadio?: boolean }
>(({ className, children, showRadio = true, ...props }, ref) => {
  return (
    <RaRadio
      ref={ref}
      className={(values) =>
        cnv(
          values,
          "group flex items-center data-[focused]:outline-none gap-x-2",
          labelVariants,
          className
        )
      }
      {...props}
    >
      {(values) => (
        <>
          {showRadio && (
            <span className="flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary ring-offset-background group-data-[disabled]:opacity-50 group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2">
              {values.isSelected && (
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              )}
            </span>
          )}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </RaRadio>
  )
})
Radio.displayName = "Radio"

export { RadioGroup, Radio }
