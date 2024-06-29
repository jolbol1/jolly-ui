import { isTextDropItem, useDragAndDrop } from "react-aria-components"
import { useListData } from "react-stately"

import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

interface FileItem {
  id: string
  name: string
  type: string
}

interface DndListBoxProps {
  initialItems: FileItem[]
  "aria-label": string
}

function DndListBox(props: DndListBoxProps) {
  let list = useListData({
    initialItems: props.initialItems,
  })

  let { dragAndDropHooks } = useDragAndDrop({
    // Provide drag data in a custom format as well as plain text.
    getItems(keys) {
      return [...keys].map((key) => {
        let item = list.getItem(key)
        return {
          "custom-app-type": JSON.stringify(item),
          "text/plain": item.name,
        }
      })
    },

    // Accept drops with the custom format.
    acceptedDragTypes: ["custom-app-type"],

    // Ensure items are always moved rather than copied.
    getDropOperation: () => "move",

    // Handle drops between items from other lists.
    async onInsert(e) {
      let processedItems = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(await item.getText("custom-app-type"))
          )
      )
      if (e.target.dropPosition === "before") {
        list.insertBefore(e.target.key, ...processedItems)
      } else if (e.target.dropPosition === "after") {
        list.insertAfter(e.target.key, ...processedItems)
      }
    },

    // Handle drops on the collection when empty.
    async onRootDrop(e) {
      let processedItems = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(await item.getText("custom-app-type"))
          )
      )
      list.append(...processedItems)
    },

    // Handle reordering items within the same list.
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys)
      }
    },

    // Remove the items from the source list on drop
    // if they were moved to a different list.
    onDragEnd(e) {
      if (e.dropOperation === "move" && !e.isInternal) {
        list.remove(...e.keys)
      }
    },
  })

  return (
    <ListBox
      className={"max-h-[200px]"}
      aria-label={props["aria-label"]}
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => "Drop items here"}
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  )
}

export default function ListBoxDragBetween() {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <DndListBox
        initialItems={[
          { id: "1", type: "file", name: "Adobe Photoshop" },
          { id: "2", type: "file", name: "Adobe XD" },
          { id: "3", type: "folder", name: "Documents" },
          { id: "4", type: "file", name: "Adobe InDesign" },
          { id: "5", type: "folder", name: "Utilities" },
          { id: "6", type: "file", name: "Adobe AfterEffects" },
        ]}
        aria-label="First ListBox"
      />
      <DndListBox
        initialItems={[
          { id: "7", type: "folder", name: "Pictures" },
          { id: "8", type: "file", name: "Adobe Fresco" },
          { id: "9", type: "folder", name: "Apps" },
          { id: "10", type: "file", name: "Adobe Illustrator" },
          { id: "11", type: "file", name: "Adobe Lightroom" },
          { id: "12", type: "file", name: "Adobe Dreamweaver" },
        ]}
        aria-label="Second ListBox"
      />
    </div>
  )
}
