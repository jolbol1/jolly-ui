"use client"

import { Heading } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

export default function DialogPopover() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Open popover</Button>
      <Popover className="w-80">
        <PopoverDialog className="space-y-2">
          <Heading
            className="text-lg font-semibold leading-none tracking-tight"
            slot="title"
          >
            Help
          </Heading>
          <p className="text-sm text-muted-foreground">
            For help accessing your account, please contact support.
          </p>
        </PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}
