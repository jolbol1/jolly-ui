import { JollyTagGroup, Tag } from "@/registry/default/ui/tag-group"

export default function TagGroupReusable() {
  return (
    <JollyTagGroup label="Ice cream flavor" selectionMode="single">
      <Tag>Chocolate</Tag>
      <Tag>Mint</Tag>
      <Tag>Strawberry</Tag>
      <Tag>Vanilla</Tag>
    </JollyTagGroup>
  )
}
