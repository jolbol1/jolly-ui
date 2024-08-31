import { Label } from "@/registry/default/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/default/ui/tag-group"

export default function TagLinks() {
  return (
    <TagGroup className="space-y-1">
      <Label>Links</Label>
      <TagList>
        <Tag href="https://adobe.com/" target="_blank">
          Adobe
        </Tag>
        <Tag href="https://apple.com/" target="_blank">
          Apple
        </Tag>
        <Tag href="https://google.com/" target="_blank">
          Google
        </Tag>
        <Tag href="https://microsoft.com/" target="_blank">
          Microsoft
        </Tag>
      </TagList>
    </TagGroup>
  )
}
