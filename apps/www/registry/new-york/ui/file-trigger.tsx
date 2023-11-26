"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Button, ButtonProps, ButtonRenderProps } from "react-aria-components"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button-variants"

interface _ButtonProps
  extends ButtonProps,
    VariantProps<typeof buttonVariants> {}

const _FileTrigger = ({ className, variant, size, ...props }: _ButtonProps) => {
  return (
    <Button
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
      {...props}
    />
  )
}

export { _FileTrigger as FileTrigger }
export type { _ButtonProps as ButtonProps }
