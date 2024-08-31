import { Label } from "@/registry/default/ui/field"
import { TagGroup, TagList } from "@/registry/default/ui/tag-group"

export default function TagGroupEmpty() {
  return (
    <TagGroup>
      <Label>Categories</Label>
      <TagList renderEmptyState={() => "No categories."}>{[]}</TagList>
    </TagGroup>
  )
}
