import { useListData } from "react-stately"

import { Label } from "@/registry/new-york/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/new-york/ui/tag-group"

export default function TagGroupRemove() {
  let list = useListData({
    initialItems: [
      { id: 1, name: "News" },
      { id: 2, name: "Travel" },
      { id: 3, name: "Gaming" },
      { id: 4, name: "Shopping" },
    ],
  })

  return (
    <TagGroup
      className="space-y-1"
      selectionMode="multiple"
      // @ts-expect-error
      onRemove={(keys) => list.remove(...keys)}
    >
      <Label>Categories</Label>
      <TagList items={list.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
    </TagGroup>
  )
}
