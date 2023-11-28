import React from "react"

import {
  FileTrigger,
  FileTriggerInput,
} from "@/registry/new-york/ui/file-trigger"

export default function FileTriggerInputDemo() {
  let [file, setFile] = React.useState<string[]>()
  return (
    <FileTrigger
      onSelect={(e) => {
        // @ts-ignore
        let files = Array.from(e)
        let filenames = files.map((file) => file.name)
        setFile(filenames)
      }}
    >
      <FileTriggerInput fileName={file} />
    </FileTrigger>
  )
}
