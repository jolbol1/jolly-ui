import {
  Disclosure,
  DisclosureGroup,
  DisclosureHeader,
  DisclosurePanel,
} from "@/registry/new-york/ui/disclosure"

export default function DisclosureGroupDemo() {
  return (
    <DisclosureGroup defaultExpandedKeys={["personal"]}>
      <Disclosure id="personal">
        <DisclosureHeader>Personal Information</DisclosureHeader>
        <DisclosurePanel>
          <p>Personal information form here.</p>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure id="billing">
        <DisclosureHeader>Billing Address</DisclosureHeader>
        <DisclosurePanel>
          <p>Billing address form here.</p>
        </DisclosurePanel>
      </Disclosure>
    </DisclosureGroup>
  )
}
