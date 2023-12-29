import React from "react"

import { cn } from "@/lib/utils"

export function ComponentCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border p-8",
        className
      )}
      {...props}
    />
  )
}
