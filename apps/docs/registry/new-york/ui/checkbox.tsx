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
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        labelVariants,
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        <div
          className={cn(
            "flex size-4 shrink-0 items-center justify-center rounded-sm border border-primary text-current ring-offset-background",
            /* Focus Visible */
            "group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2",
            /* Selected */
            "group-data-[indeterminate]:bg-primary group-data-[selected]:bg-primary group-data-[indeterminate]:text-primary-foreground  group-data-[selected]:text-primary-foreground",
            /* Disabled */
            "group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50",
            /* Invalid */
            "group-data-[invalid]:border-destructive group-data-[invalid]:group-data-[selected]:bg-destructive group-data-[invalid]:group-data-[selected]:text-destructive-foreground",
            /* Resets */
            "focus-visible:outline-none"
          )}
        >
          {renderProps.isIndeterminate ? (
            <Minus className="size-4" />
          ) : renderProps.isSelected ? (
            <Check className="size-4" />
          ) : null}
        </div>
        {children}
      </>
    ))}
  </AriaCheckbox>
)

export { Checkbox, CheckboxGroup }
