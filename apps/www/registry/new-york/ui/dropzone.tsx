"use client"

import * as React from "react"
import { DropZone, DropZoneProps } from "react-aria-components"

import { cnv } from "@/lib/utils"

const _DropZone = ({ className, ...props }: DropZoneProps) => (
  <DropZone
    className={(values) =>
      cnv(
        values,
        "flex flex-col h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm data-[drop-target]:border-solid data-[drop-target]:border-primary data-[drop-target]:bg-accent",
        className
      )
    }
    {...props}
  />
)

export { _DropZone as DropZone }
