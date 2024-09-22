"use client"

import * as React from "react"
import { CheckIcon, ClipboardIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export function BlockCopyButton({
  name,
  code,
  className,
  ...props
}: {
  name: string
  code: string
} & ButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <TooltipTrigger>
      <Button
        size="icon"
        variant="outline"
        className={cn(
          "[&_svg]-h-3.5 size-7 rounded-[6px] [&_svg]:w-3.5",
          className
        )}
        onPress={() => {
          navigator.clipboard.writeText(code)
          setHasCopied(true)
        }}
        {...props}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
      </Button>
      <Tooltip>Copy code</Tooltip>
    </TooltipTrigger>
  )
}
