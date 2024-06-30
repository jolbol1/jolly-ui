import * as React from "react"
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  TextField as AriaTextField,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const TextField = AriaTextField

const Input = ({ className, ...props }: AriaInputProps) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          /* Focused */
          "data-[focused]:outline-none data-[focused]:ring-1 data-[focused]:ring-ring",
          /* Resets */
          "focus-visible:outline-none",
          className
        )
      )}
      {...props}
    />
  )
}

export { Input, TextField }
