"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { Label, LabelProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const _Label = ({ className, ...props }: LabelProps) => (
  <Label className={cn(labelVariants(), className)} {...props} />
)

export { _Label as Label, labelVariants }
