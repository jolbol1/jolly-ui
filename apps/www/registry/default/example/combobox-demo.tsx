"use client"

import * as React from "react"
import { Collection } from "react-aria-components"

import {
  Combobox,
  ComboboxContent,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
} from "@/registry/default/ui/combobox"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export default function ComboboxDemo() {
  return (
    <Combobox aria-label="Cities">
      <ComboboxInput
        className="max-w-[200px]"
        placeholder="Select a framework..."
      />
      <ComboboxContent crossOffset={-12} offset={12} className="w-[200px]">
        <ComboboxGroup>
          <ComboboxLabel separator>Cities</ComboboxLabel>
          <Collection items={frameworks}>
            {(item) => (
              <ComboboxItem
                textValue={item.label}
                id={item.value}
                key={item.value}
              >
                {item.label}
              </ComboboxItem>
            )}
          </Collection>
        </ComboboxGroup>
      </ComboboxContent>
    </Combobox>
  )
}
