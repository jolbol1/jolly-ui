"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeBlockWrapper({
  className,
  children,
  ...props
}: CodeBlockProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <div
        className={cn("[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]")}
      >
        {children}
      </div>
    </div>
  )
}
