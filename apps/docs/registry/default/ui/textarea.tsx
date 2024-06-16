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
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
          "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          className
        )
      )}
      {...props}
    />
  )
}

export { TextArea }
