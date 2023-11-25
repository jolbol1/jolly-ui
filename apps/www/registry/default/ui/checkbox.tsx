"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { Checkbox, type CheckboxProps } from "react-aria-components"

import { cnv } from "@/lib/utils"

import { labelVariants } from "./label"

export interface _CheckboxProps extends CheckboxProps {}

const _Checkbox = ({ className, children, ...props }: _CheckboxProps) => (
  <Checkbox
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
  </Checkbox>
)

export { _Checkbox as Checkbox }
