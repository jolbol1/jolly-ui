"use client"

import {
  Combobox,
  ComboboxCollection,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
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

export function ComboboxDemo() {
  return (
    <Combobox aria-label="Select Framework">
      <ComboboxInput
        className="w-[200px]"
        placeholder="Select a framework..."
      />
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxSection>
            <ComboboxLabel separator>Frameworks</ComboboxLabel>
            <ComboboxCollection items={frameworks}>
              {(item) => (
                <ComboboxItem
                  textValue={item.label}
                  id={item.value}
                  key={item.value}
                >
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxSection>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

export default ComboboxDemo
