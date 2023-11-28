import React from "react"

import { Button } from "@/registry/default/ui/button"
import { FileTrigger } from "@/registry/default/ui/file-trigger"

export default function FileTriggerButtonDemo() {
  return (
    <FileTrigger>
      <Button>Select a file</Button>
    </FileTrigger>
  )
}
