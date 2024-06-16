"use client"

import { cva } from "class-variance-authority"
import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const labelVariants = cva([
  "text-sm font-medium leading-none",
  /* Disabled */
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
])

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={cn(labelVariants(), className)} {...props} />
)

export { Label, labelVariants }
