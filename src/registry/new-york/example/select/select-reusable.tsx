import { JollySelect, SelectItem } from "@/registry/new-york/ui/select"

export default function SelectReusable() {
  return (
    <JollySelect
      label="Ice cream flavor"
      description="Select a flavor"
      className="w-[200px]"
      isRequired
    >
      <SelectItem>Chocolate</SelectItem>
      <SelectItem>Mint</SelectItem>
      <SelectItem>Strawberry</SelectItem>
      <SelectItem>Vanilla</SelectItem>
    </JollySelect>
  )
}
