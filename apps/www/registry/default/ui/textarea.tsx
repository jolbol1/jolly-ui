import * as React from "react"
import { TextArea, TextAreaProps } from "react-aria-components"

import { cn } from "@/lib/utils"

const _TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <TextArea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { _TextArea as TextArea }
