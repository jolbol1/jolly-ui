"use client"

import { Text } from "react-aria-components"

import { Label } from "@/registry/default/ui/field"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectTextSlots() {
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Permissions</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectItem
            textValue="Read"
            className="flex flex-col items-start justify-center"
          >
            <Text slot="label">Read only</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Read only
            </Text>
          </SelectItem>
          <SelectItem
            textValue="Write"
            className="flex flex-col items-start justify-center"
          >
            <Text slot="label">Write</Text>
            <Text slot="description" className="text-sm text-muted-foreground">
              Read and write only
            </Text>
          </SelectItem>
          <SelectItem
            textValue="Admin"
            className="flex flex-col items-start justify-center"
          >
            <Text slot="label">Admin</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Full access
            </Text>
          </SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
