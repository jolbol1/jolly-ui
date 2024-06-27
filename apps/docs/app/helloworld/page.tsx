"use client"

import React from "react"
import { Selection, Text } from "react-aria-components"
import { useListData } from "react-stately"

import { Label } from "@/registry/default/ui/field"
import { Tag, TagGroup, TagList } from "@/registry/default/ui/tag-group"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <TagGroupDemo />
      <TagGroupRemove />
      <TagGroupSelection />
      <TagLinks />
      <TagDisabledItems />
      <TagDisabledKeys />
      <TagGroupEmpty />
      <TagHelperText />
      <TagErrorText />
    </div>
  )
}

export function TagGroupDemo() {
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

function TagGroupRemove() {
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
      onRemove={(keys) => list.remove(...keys)}
    >
      <Label>Categories</Label>
      <TagList items={list.items}>{(item) => <Tag>{item.name}</Tag>}</TagList>
    </TagGroup>
  )
}

function TagGroupSelection() {
  let [selected, setSelected] = React.useState<Selection>(new Set(["parking"]))

  return (
    <TagGroup
      className="space-y-1"
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      <Label>Amenities</Label>
      <TagList>
        <Tag id="laundry">Laundry</Tag>
        <Tag id="fitness">Fitness center</Tag>
        <Tag id="parking">Parking</Tag>
        <Tag id="pool">Swimming pool</Tag>
        <Tag id="breakfast">Breakfast</Tag>
      </TagList>
    </TagGroup>
  )
}

export function TagLinks() {
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

export function TagDisabledItems() {
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

function TagDisabledKeys() {
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

function TagGroupEmpty() {
  return (
    <TagGroup>
      <Label>Categories</Label>
      <TagList renderEmptyState={() => "No categories."}>{[]}</TagList>
    </TagGroup>
  )
}

function TagHelperText() {
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

function TagErrorText() {
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
