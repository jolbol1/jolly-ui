import { Label } from "@/registry/default/ui/field"
import {
  Select,
  SelectCollection,
  SelectHeader,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectSectionsDynamic() {
  let options = [
    {
      name: "Fruit",
      children: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Orange" },
        { name: "Honeydew" },
        { name: "Grapes" },
        { name: "Watermelon" },
        { name: "Cantaloupe" },
        { name: "Pear" },
      ],
    },
    {
      name: "Vegetable",
      children: [
        { name: "Cabbage" },
        { name: "Broccoli" },
        { name: "Carrots" },
        { name: "Lettuce" },
        { name: "Spinach" },
        { name: "Bok Choy" },
        { name: "Cauliflower" },
        { name: "Potatoes" },
      ],
    },
  ]
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Preferred fruit or vegetable</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox items={options}>
          {(section) => (
            <SelectSection id={section.name}>
              <SelectHeader>{section.name}</SelectHeader>
              <SelectCollection items={section.children}>
                {(item) => <SelectItem id={item.name}>{item.name}</SelectItem>}
              </SelectCollection>
            </SelectSection>
          )}
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
