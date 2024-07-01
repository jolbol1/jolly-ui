import { ComboboxItem, JollyComboBox } from "@/registry/new-york/ui/combobox"

export default function CheckboxReusable() {
  return (
    <JollyComboBox
      label="Ice cream flavor"
      description="Select a flavor"
      isRequired
    >
      <ComboboxItem>Chocolate</ComboboxItem>
      <ComboboxItem>Mint</ComboboxItem>
      <ComboboxItem>Strawberry</ComboboxItem>
      <ComboboxItem>Vanilla</ComboboxItem>
    </JollyComboBox>
  )
}
