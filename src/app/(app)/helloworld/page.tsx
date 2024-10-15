"use client"

import { ChevronRightIcon, InfoIcon } from "lucide-react"
import { Collection } from "react-aria-components"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/registry/default/ui/checkbox"
import {
  Tree,
  TreeItem,
  TreeItemContent,
  TreeItemExpandButton,
  TreeItemInfoButton,
} from "@/registry/default/ui/tree"

let items = [
  {
    id: 1,
    title: "Documents",
    children: [
      {
        id: 2,
        title: "Project",
        children: [{ id: 3, title: "Weekly Report", children: [] }],
      },
    ],
  },
  {
    id: 4,
    title: "Photos",
    children: [
      { id: 5, title: "Image 1", children: [] },
      { id: 6, title: "Image 2", children: [] },
    ],
  },
]

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Tree
        className="w-[250px]"
        aria-label="Files"
        selectionMode="multiple"
        items={items}
      >
        {function renderItem(item) {
          return (
            <TreeItem textValue={item.title}>
              <TreeItemContent>
                {item.children.length ? <TreeItemExpandButton /> : null}
                <Checkbox slot="selection" />
                {item.title}
                <TreeItemInfoButton />
              </TreeItemContent>
              <Collection items={item.children}>{renderItem}</Collection>
            </TreeItem>
          )
        }}
      </Tree>
    </div>
  )
}
