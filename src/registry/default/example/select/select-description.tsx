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

export default function SelectDescription() {
  return (
    <Select isRequired className="group w-[200px]" placeholder="Select an item">
      <Label>Favorite Animal</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select an animal.
      </Text>
      <SelectPopover>
        <SelectListBox>
          <SelectItem>Aardvark</SelectItem>
          <SelectItem>Cat</SelectItem>
          <SelectItem>Dog</SelectItem>
          <SelectItem>Kangaroo</SelectItem>
          <SelectItem>Panda</SelectItem>
          <SelectItem>Snake</SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
