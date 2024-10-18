"use client"

import * as React from "react"
import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"

import { focusRing } from "@/registry/default/ui/base-styles"

const buttonVariants = tv({
  extend: focusRing,
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground data-[hovered]:bg-primary/90",
      destructive:
        "bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/90",
      outline:
        "border border-input bg-background data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/80",
      ghost: "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
      link: "text-primary underline-offset-4 data-[hovered]:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "size-10",
    },
    isDisabled: {
      true: "pointer-events-none opacity-50",
    },
    isPending: {
      true: "pointer-events-none opacity-50",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    isDisabled: false,
    isPending: false,
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

interface ButtonProps extends AriaButtonProps, ButtonVariants {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <AriaButton
      className={composeRenderProps(className, (className, renderProps) =>
        buttonVariants({ ...renderProps, variant, size, className })
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps, ButtonVariants }
