"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import {
  ButtonRenderProps,
  Button as RaButton,
  ButtonProps as RaButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button-variants"

export interface ButtonProps
  extends RaButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <RaButton
        className={(values: ButtonRenderProps) =>
          cn(
            buttonVariants({
              variant,
              size,
              className:
                typeof className === "function" ? className(values) : className,
            })
          )
        }
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
