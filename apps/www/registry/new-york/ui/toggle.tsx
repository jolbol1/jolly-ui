"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ToggleButton, type ToggleButtonProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors data-[hovered]:bg-muted data-[hovered]:text-muted-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[selected]:bg-accent data-[selected]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ToggleProps
  extends ToggleButtonProps,
    VariantProps<typeof toggleVariants> {
  className?: string
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <ToggleButton
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
)

Toggle.displayName = "ToggleButton"

export { Toggle, toggleVariants }
