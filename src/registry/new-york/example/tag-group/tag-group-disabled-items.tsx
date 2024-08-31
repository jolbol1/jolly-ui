import { Label } from "@/registry/new-york/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/new-york/ui/tag-group"

export default function TagDisabledItems() {
  return (
    <TagGroup selectionMode="multiple" className="space-y-1">
      <Label>Sandwich contents</Label>
      <TagList>
        <Tag>Lettuce</Tag>
        <Tag>Tomato</Tag>
        <Tag>Cheese</Tag>
        <Tag isDisabled>Tuna Salad</Tag>
        <Tag>Egg Salad</Tag>
        <Tag>Ham</Tag>
      </TagList>
    </TagGroup>
  )
}
