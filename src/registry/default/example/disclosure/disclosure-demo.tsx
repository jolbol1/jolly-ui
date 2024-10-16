"use client"

import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/default/ui/disclosure"

export default function DisclosureDemo() {
  return (
    <Disclosure>
      <DisclosureHeader>System Requirements</DisclosureHeader>
      <DisclosurePanel>
        <p>Details about system requirements here.</p>
      </DisclosurePanel>
    </Disclosure>
  )
}
