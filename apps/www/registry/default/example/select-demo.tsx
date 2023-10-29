import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="w-[180px]">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem id="apple">Apple</SelectItem>
          <SelectItem id="banana">Banana</SelectItem>
          <SelectItem id="blueberry">Blueberry</SelectItem>
          <SelectItem id="grapes">Grapes</SelectItem>
          <SelectItem id="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
