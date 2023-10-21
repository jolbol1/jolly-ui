import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Button as RaButton,
  ButtonProps as RaButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button-variants"

export interface ButtonProps
  extends RaButtonProps,
    VariantProps<typeof buttonVariants> {
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <RaButton
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
