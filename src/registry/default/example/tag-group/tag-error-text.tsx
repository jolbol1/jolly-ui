"use client"

import { Text } from "react-aria-components"

import { Label } from "../../ui/field"
import { Tag, TagGroup, TagList } from "../../ui/tag-group"

export default function TagErrorText() {
  return (
    <TagGroup className="space-y-1">
      <Label>Categories</Label>
      <TagList>
        <Tag>News</Tag>
        <Tag>Travel</Tag>
        <Tag>Gaming</Tag>
        <Tag>Shopping</Tag>
      </TagList>
      <Text
        className="text-sm font-medium text-destructive"
        slot="errorMessage"
      >
        Invalid set of categories.
      </Text>
    </TagGroup>
  )
}
