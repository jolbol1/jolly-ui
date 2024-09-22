"use client"

import { useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"

import { GridList, GridListItem } from "@/registry/default/ui/grid-list"

export default function GridListDragAndDrop() {
  //useListData is a convenience hook, not a requirement. You can manage your state however you wish.
  let list = useListData({
    initialItems: [
      { id: 1, name: "Adobe Photoshop" },
      { id: 2, name: "Adobe XD" },
      { id: 3, name: "Adobe Dreamweaver" },
      { id: 4, name: "Adobe InDesign" },
      { id: 5, name: "Adobe Connect" },
    ],
  })

  let { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys) =>
      // @ts-expect-error
      [...keys].map((key) => ({ "text/plain": list.getItem(key).name })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys)
      }
    },
  })

  return (
    <GridList
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => <GridListItem>{item.name}</GridListItem>}
    </GridList>
  )
}
