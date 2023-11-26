import * as React from "react"
import { TextArea, TextAreaProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const _TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <TextArea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { _TextArea as TextArea }
