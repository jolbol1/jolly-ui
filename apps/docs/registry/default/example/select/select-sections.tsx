import { Label } from "@/registry/default/ui/field"
import {
  Select,
  SelectHeader,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectSections() {
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Preferred fruit or vegetable</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectSection>
            <SelectHeader>Fruit</SelectHeader>
            <SelectItem id="Apple">Apple</SelectItem>
            <SelectItem id="Banana">Banana</SelectItem>
            <SelectItem id="Orange">Orange</SelectItem>
            <SelectItem id="Honeydew">Honeydew</SelectItem>
            <SelectItem id="Grapes">Grapes</SelectItem>
            <SelectItem id="Watermelon">Watermelon</SelectItem>
            <SelectItem id="Cantaloupe">Cantaloupe</SelectItem>
            <SelectItem id="Pear">Pear</SelectItem>
          </SelectSection>
          <SelectSection>
            <SelectHeader>Vegetable</SelectHeader>
            <SelectItem id="Cabbage">Cabbage</SelectItem>
            <SelectItem id="Broccoli">Broccoli</SelectItem>
            <SelectItem id="Carrots">Carrots</SelectItem>
            <SelectItem id="Lettuce">Lettuce</SelectItem>
            <SelectItem id="Spinach">Spinach</SelectItem>
            <SelectItem id="Bok Choy">Bok Choy</SelectItem>
            <SelectItem id="Cauliflower">Cauliflower</SelectItem>
            <SelectItem id="Potatoes">Potatoes</SelectItem>
          </SelectSection>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
