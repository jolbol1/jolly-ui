"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Label as RaLabel } from "react-aria-components"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof RaLabel>,
  React.ComponentPropsWithoutRef<typeof RaLabel> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <RaLabel ref={ref} className={cn(labelVariants(), className)} {...props} />
))
Label.displayName = "Label"

export { Label }
