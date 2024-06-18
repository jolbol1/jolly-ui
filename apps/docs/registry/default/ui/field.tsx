"use client"

import { cva, type VariantProps } from "class-variance-authority"
import {
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const labelVariants = cva([
  "text-sm font-medium leading-none",
  /* Disabled */
  "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
])

const Label = ({ className, ...props }: AriaLabelProps) => (
  <AriaLabel className={cn(labelVariants(), className)} {...props} />
)

const fieldGroupVariants = cva("", {
  variants: {
    variant: {
      default: [
        "flex h-10 w-full items-center overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        /* Focus Within */
        "data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2",
        /* Disabled */
        "data-[disabled]:opacity-50",
      ],
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface GroupProps
  extends AriaGroupProps,
    VariantProps<typeof fieldGroupVariants> {}

function FieldGroup({ className, variant, ...props }: GroupProps) {
  return (
    <AriaGroup
      className={composeRenderProps(className, (className) =>
        cn(fieldGroupVariants({ variant }), className)
      )}
      {...props}
    />
  )
}

export { Label, labelVariants, FieldGroup, fieldGroupVariants }
