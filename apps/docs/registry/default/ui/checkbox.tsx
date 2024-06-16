"use client"

import * as React from "react"
import { Check, Minus } from "lucide-react"
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  composeRenderProps,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { labelVariants } from "./label"

const CheckboxGroup = AriaCheckboxGroup

const Checkbox = ({ className, children, ...props }: AriaCheckboxProps) => (
  <AriaCheckbox
    className={composeRenderProps(className, (className) =>
      cn(
        "group flex items-center gap-x-2",
        /* Disabled */
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 ",
        labelVariants,
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        <div className="size-4 shrink-0 rounded-sm border border-primary ring-offset-background group-data-[indeterminate]:bg-primary group-data-[selected]:bg-primary group-data-[indeterminate]:text-primary-foreground  group-data-[selected]:text-primary-foreground group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2">
          {renderProps.isIndeterminate ? (
            <Minus className="size-3.5" />
          ) : renderProps.isSelected ? (
            <Check className="h-4 w-3.5" />
          ) : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
)

export { Checkbox, CheckboxGroup }
