"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import {
  Checkbox,
  CheckboxRenderProps,
  type CheckboxProps,
} from "react-aria-components"

import { cnv } from "@/lib/utils"
import { labelVariants } from "@/registry/new-york/ui/label"

export interface _CheckboxProps extends CheckboxProps {}

const _Checkbox = ({ className, children, ...props }: _CheckboxProps) => (
  <Checkbox
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
  </Checkbox>
)

export { _Checkbox as Checkbox }
