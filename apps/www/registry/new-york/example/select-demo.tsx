import * as React from "react"

import {
  Select,
  SelectContent,
  SelectHeader,
  SelectItem,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export default function SelectDemo() {
  return (
    <Select aria-label="item selection">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent aria-label="items">
          <SelectSection aria-label="fruits">
            <SelectHeader>Fruits</SelectHeader>
            <SelectItem textValue="apple" id="apple">
              Apple
            </SelectItem>
            <SelectItem textValue="banana" id="banana">
              Banana
            </SelectItem>
            <SelectItem textValue="blueberry" id="blueberry">
              Blueberry
            </SelectItem>
            <SelectItem textValue="grapes" id="grapes">
              Grapes
            </SelectItem>
            <SelectItem textValue="pineapple" id="pineapple">
              Pineapple
            </SelectItem>
          </SelectSection>
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
