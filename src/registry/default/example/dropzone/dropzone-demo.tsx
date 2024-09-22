"use client"

import React from "react"
import { Text } from "react-aria-components"

import { DropZone } from "@/registry/default/ui/dropzone"

export function DropZoneDemo() {
  let [dropped, setDropped] = React.useState(false)

  return (
    <DropZone onDrop={() => setDropped(true)}>
      <Text slot="label">
        {dropped ? "Successful drop!" : "Drop files here"}
      </Text>
    </DropZone>
  )
}
export default DropZoneDemo
