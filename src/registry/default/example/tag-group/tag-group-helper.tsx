"use client"

import { Text } from "react-aria-components"

import { Label } from "@/registry/default/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/default/ui/tag-group"

export default function TagHelperText() {
  return (
    <TagGroup className="space-y-1">
      <Label>Categories</Label>
      <TagList>
        <Tag>News</Tag>
        <Tag>Travel</Tag>
        <Tag>Gaming</Tag>
        <Tag>Shopping</Tag>
      </TagList>
      <Text className="text-sm text-muted-foreground" slot="description">
        Your selected categories.
      </Text>
    </TagGroup>
  )
}
