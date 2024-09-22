"use client"

import { CaretSortIcon } from "@radix-ui/react-icons"
import { Text } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/new-york/ui/combobox"
import { FieldGroup, Label } from "@/registry/new-york/ui/field"

export default function ComboboxTextSlot() {
  return (
    <Combobox>
      <Label>Select action</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="mr-1 size-6 p-1">
          <CaretSortIcon aria-hidden="true" className="size-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem
            textValue="Add to queue"
            className="flex flex-col items-start"
          >
            <Text slot="label">Add to queue</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Add to current watch queue.
            </Text>
          </ComboboxItem>
          <ComboboxItem
            textValue="Add review"
            className="flex flex-col items-start"
          >
            <Text slot="label">Add review</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Post a review for the episode.
            </Text>
          </ComboboxItem>
          <ComboboxItem
            textValue="Report"
            className="flex flex-col items-start"
          >
            <Text slot="label">Report</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Report an issue/violation.
            </Text>
          </ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
