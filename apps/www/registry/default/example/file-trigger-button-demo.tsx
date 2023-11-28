import React from "react"
import { FileTrigger } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"

export default function FileTriggerButtonDemo() {
  return (
    <FileTrigger>
      <Button>Select a file</Button>
    </FileTrigger>
  )
}
