"use client"

import * as React from "react"
import { Check } from "lucide-react"
import {
  Checkbox as RaCheckbox,
  type CheckboxProps as RaCheckboxProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

export interface CheckboxProps extends RaCheckboxProps {
  className?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <RaCheckbox
      ref={ref}
      className={cn(
        "peer block h-4 w-4 shrink-0 rounded-sm border border-primary shadow data-[disabled]:cursor-not-allowed data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring",
        className
      )}
      {...props}
    >
      {({ isSelected }) =>
        isSelected ? <Check className="h-4 w-[0.875rem]" /> : null
      }
    </RaCheckbox>
  )
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
