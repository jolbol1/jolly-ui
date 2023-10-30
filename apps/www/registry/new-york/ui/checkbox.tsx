"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import {
  CheckboxRenderProps,
  Checkbox as RaCheckbox,
  type CheckboxProps as RaCheckboxProps,
} from "react-aria-components"

import { cnv } from "@/lib/utils"
import { labelVariants } from "@/registry/default/ui/label"

export interface CheckboxProps extends RaCheckboxProps {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, children, ...props }, ref) => (
    <RaCheckbox
      ref={ref}
      className={(values) =>
        cnv<CheckboxRenderProps>(
          values,
          "group flex items-center gap-x-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 ",
          labelVariants,
          typeof className === "function" ? className(values) : className
        )
      }
      {...props}
    >
      {(values) => (
        <>
          <div className="flex h-4 w-4 shrink-0 rounded-sm border border-primary shadow group-data-[selected]:bg-primary group-data-[selected]:text-primary-foreground group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-1 group-data-[focus-visible]:ring-ring">
            {values.isSelected ? <CheckIcon className="h-4 w-4" /> : null}
          </div>
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </RaCheckbox>
  )
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
