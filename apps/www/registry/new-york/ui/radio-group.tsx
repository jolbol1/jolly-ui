"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import {
  Radio as RaRadio,
  RadioGroup as RaRadioGroup,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"
import { labelVariants } from "@/registry/default/ui/label"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RaRadioGroup>,
  React.ComponentPropsWithoutRef<typeof RaRadioGroup>
>(({ className, ...props }, ref) => {
  return (
    <RaRadioGroup
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = "RadioGroup"

const Radio = React.forwardRef<
  React.ElementRef<typeof RaRadio>,
  React.ComponentPropsWithoutRef<typeof RaRadio> & { showRadio?: boolean }
>(({ className, showRadio = true, children, ...props }, ref) => {
  return (
    <RaRadio
      ref={ref}
      className={(values) =>
        cnv(
          values,
          "group flex items-center gap-x-2 data-[focused]:outline-none ",
          labelVariants,
          className
        )
      }
      {...props}
    >
      {(values) => (
        <>
          {showRadio && (
            <span className="flex aspect-square h-4 w-4 items-center justify-center rounded-full  border border-primary shadow data-[disabled]:opacity-50 group-data-[focus-visible]:ring-1 group-data-[focus-visible]:ring-ring">
              {values.isSelected && (
                <CheckIcon className="h-3.5 w-3.5 fill-primary" />
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
