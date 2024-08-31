import { Label } from "@/registry/new-york/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/new-york/ui/tag-group"

export default function TagGroupDisabledKeys() {
  let options = [
    { id: 1, name: "News" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Shopping" },
  ]

  return (
    <TagGroup
      selectionMode="multiple"
      disabledKeys={[2, 4]}
      className="space-y-1"
    >
      <Label>Categories</Label>
      <TagList items={options}>{(item) => <Tag>{item.name}</Tag>}</TagList>
    </TagGroup>
  )
}
