import * as React from "react"
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Input = ({ className, ...props }: AriaInputProps) => {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          /* Focus Visible */
          "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
          className
        )
      )}
      {...props}
    />
  )
}

export { Input }
