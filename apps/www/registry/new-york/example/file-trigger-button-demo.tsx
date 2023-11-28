import React from "react"

import { Button } from "@/registry/new-york/ui/button"
import { FileTrigger } from "@/registry/new-york/ui/file-trigger"

export default function FileTriggerButtonDemo() {
  return (
    <FileTrigger>
      <Button>Select a file</Button>
    </FileTrigger>
  )
}
