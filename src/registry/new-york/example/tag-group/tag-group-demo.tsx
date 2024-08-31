import { Label } from "@/registry/new-york/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/new-york/ui/tag-group"

export default function TagGroupDemo() {
  return (
    <TagGroup className="space-y-1" selectionMode="multiple">
      <Label>Categories</Label>
      <TagList>
        <Tag>News</Tag>
        <Tag>Travel</Tag>
        <Tag>Gaming</Tag>
        <Tag>Shopping</Tag>
      </TagList>
    </TagGroup>
  )
}
