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

const components = [
  {
    value: "button",
    label: "Button",
    href: "../../../docs/components/button",
  },
  {
    value: "filetrigger",
    label: "File Trigger",
    href: "../../../docs/components/file-trigger",
  },
  {
    value: "toggle",
    label: "Toggle Button",
    href: "../../../docs/components/toggle",
  },
  {
    value: "link",
    label: "Link",
    href: "../../../docs/components/link",
  },
]

export default function ComboboxLinkDemo() {
  return (
    <Combobox aria-label="Components">
      <ComboboxInput
        className="w-[200px]"
        placeholder="Select a component..."
      />
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxSection>
            <ComboboxLabel separator>Components</ComboboxLabel>
            <ComboboxCollection items={components}>
              {(item) => (
                <ComboboxItem
                  href={item.href}
                  target="_blank"
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
