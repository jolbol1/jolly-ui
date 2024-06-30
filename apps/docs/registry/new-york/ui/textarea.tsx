import * as React from "react"
import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const TextArea = ({ className, ...props }: AriaTextAreaProps) => {
  return (
    <AriaTextArea
      className={composeRenderProps(className, (className) =>
        cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground",
          /* Focused */
          "data-[focused]:outline-none data-[focused]:ring-1 data-[focused]:ring-ring",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          /* Resets */
          "focus-visible:outline-none",
          className
        )
      )}
      {...props}
    />
  )
}

export { TextArea }
