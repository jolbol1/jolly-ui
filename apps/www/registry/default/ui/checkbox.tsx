"use client"

import * as React from "react"
import { Check } from "lucide-react"
import {
  Checkbox as RaCheckbox,
  type CheckboxProps as RaCheckboxProps,
} from "react-aria-components"

import { cnv } from "@/lib/utils"

import { labelVariants } from "./label"

export interface CheckboxProps extends RaCheckboxProps {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, children, ...props }, ref) => (
    <RaCheckbox
      ref={ref}
      className={(values) =>
        cnv(
          values,
          "group flex items-center gap-x-2  data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 ",
          labelVariants,
          className
        )
      }
      {...props}
    >
      {(values) => (
        <>
          <div className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2">
            {values.isSelected ? <Check className="h-4 w-[0.875rem]" /> : null}
          </div>
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </RaCheckbox>
  )
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
