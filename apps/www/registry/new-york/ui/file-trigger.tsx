"use client"

import * as React from "react"
import { Button, ButtonProps, FileTrigger } from "react-aria-components"

import { cnv } from "@/lib/utils"

const _FileTrigger = FileTrigger

export interface FileTriggerInputProps extends ButtonProps {
  fileName?: string[]
}

const _FileTriggerInput = ({
  className,
  fileName,
  ...props
}: FileTriggerInputProps) => {
  return (
    <Button
      className={(values) =>
        cnv(
          values,
          "flex h-9 overflow-hidden w-full items-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }
      {...props}
    >
      <span className="mx-2 whitespace-nowrap font-medium	">Choose file</span>
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {fileName ? fileName : "No file chosen"}
      </span>
    </Button>
  )
}

export { _FileTriggerInput as FileTriggerInput, _FileTrigger as FileTrigger }
