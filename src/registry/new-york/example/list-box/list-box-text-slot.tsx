"use client"

import { Text } from "react-aria-components"

import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

export default function ListBoxTextSlot() {
  return (
    <ListBox className={"max-h-[200px]"} aria-label="Permissions">
      <ListBoxItem className="flex flex-col items-start" textValue="Read">
        <Text slot="label">Read</Text>
        <Text className="text-sm text-muted-foreground" slot="description">
          Read only
        </Text>
      </ListBoxItem>
      <ListBoxItem className="flex flex-col items-start" textValue="Read">
        <Text slot="label">Write</Text>
        <Text className="text-sm text-muted-foreground" slot="description">
          Read and write only
        </Text>
      </ListBoxItem>
      <ListBoxItem className="flex flex-col items-start" textValue="Read">
        <Text slot="label">Admin</Text>
        <Text className="text-sm text-muted-foreground" slot="description">
          Full access
        </Text>
      </ListBoxItem>
    </ListBox>
  )
}
