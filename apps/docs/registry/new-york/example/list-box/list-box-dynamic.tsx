import React from "react"
import type { Selection } from "react-aria-components"

import {
  ListBox,
  ListBoxCollection,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from "@/registry/new-york/ui/list-box"

export default function ListBoxDynamic() {
  let options = [
    {
      name: "Australian",
      children: [
        { id: 2, name: "Koala" },
        { id: 3, name: "Kangaroo" },
        { id: 4, name: "Platypus" },
      ],
    },
    {
      name: "American",
      children: [
        { id: 6, name: "Bald Eagle" },
        { id: 7, name: "Bison" },
        { id: 8, name: "Skunk" },
      ],
    },
  ]
  let [selected, setSelected] = React.useState<Selection>(new Set())

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      className={"max-h-[200px]"}
      onSelectionChange={setSelected}
    >
      {(section) => (
        <ListBoxSection id={section.name}>
          <ListBoxHeader>{section.name}</ListBoxHeader>
          <ListBoxCollection items={section.children}>
            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
          </ListBoxCollection>
        </ListBoxSection>
      )}
    </ListBox>
  )
}
