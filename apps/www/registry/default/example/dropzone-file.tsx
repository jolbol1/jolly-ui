import React from "react"
import { FileDropItem, Text } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { DropZone } from "@/registry/default/ui/dropzone"
import { FileTrigger } from "@/registry/default/ui/file-trigger"

export default function DropZoneDemo() {
  let [files, setFiles] = React.useState<string>()

  return (
    <DropZone
      onDrop={(e) => {
        let files = e.items.filter(
          (file) => file.kind === "file"
        ) as FileDropItem[]
        let filenames = files.map((file) => file.name)
        setFiles(filenames.join(", "))
      }}
    >
      <FileTrigger
        allowsMultiple
        onSelect={(e) => {
          // @ts-ignore
          let files = Array.from(e)
          let filenames = files.map((file) => file.name)
          setFiles(filenames.join(", "))
        }}
      >
        <Button variant="outline">Select files</Button>
      </FileTrigger>
      <Text slot="label" style={{ display: "block" }}>
        {files || "Drop files here"}
      </Text>
    </DropZone>
  )
}