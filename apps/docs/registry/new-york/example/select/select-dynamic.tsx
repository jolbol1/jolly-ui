import {
  Select,
  SelectCollection,
  SelectContent,
  SelectHeader,
  SelectItem,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

type SelectOptions = { name: string; children: { name: string }[] }[]

let options: SelectOptions = [
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

export function SelectDynamic() {
  return (
    <Select placeholder="Select an item" aria-label="fruit selection">
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent aria-label="items" items={options}>
          {(section) => (
            <SelectSection id={section.name}>
              <SelectHeader>{section.name}</SelectHeader>
              <SelectCollection items={section.children}>
                {(item) => (
                  <SelectItem id={item.name} textValue={item.name}>
                    {item.name}
                  </SelectItem>
                )}
              </SelectCollection>
            </SelectSection>
          )}
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
export default SelectDynamic
