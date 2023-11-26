"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { Link, LinkProps, LinkRenderProps } from "react-aria-components"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button-variants"

interface _LinkProps extends LinkProps, VariantProps<typeof buttonVariants> {}

const _Link = ({ className, variant, size, ...props }: _LinkProps) => {
  return (
    <Link
      className={(values: LinkRenderProps) =>
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

export { _Link as Link }
export type { _LinkProps as LinkProps }
