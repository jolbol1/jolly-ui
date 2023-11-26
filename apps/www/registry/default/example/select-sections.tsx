import {
  Select,
  SelectContent,
  SelectHeader,
  SelectItem,
  SelectPopover,
  SelectSection,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectDemo() {
  return (
    <Select aria-label="fruit selection">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent aria-label="items">
          <SelectSection>
            <SelectHeader>Fruit</SelectHeader>
            <SelectItem textValue="Apple">Apple</SelectItem>
            <SelectItem textValue="Banana">Banana</SelectItem>
            <SelectItem textValue="Orange">Orange</SelectItem>
            <SelectItem textValue="Honeydew">Honeydew</SelectItem>
            <SelectItem textValue="Grapes">Grapes</SelectItem>
            <SelectItem textValue="Watermelon">Watermelon</SelectItem>
            <SelectItem textValue="Cantaloupe">Cantaloupe</SelectItem>
            <SelectItem textValue="Pear">Pear</SelectItem>
          </SelectSection>
          <SelectSection>
            <SelectHeader>Vegetable</SelectHeader>
            <SelectItem textValue="Cabbage">Cabbage</SelectItem>
            <SelectItem textValue="Broccoli">Broccoli</SelectItem>
            <SelectItem textValue="Carrots">Carrots</SelectItem>
            <SelectItem textValue="Lettuce">Lettuce</SelectItem>
            <SelectItem textValue="Spinach">Spinach</SelectItem>
            <SelectItem textValue="Bok Choy">Bok Choy</SelectItem>
            <SelectItem textValue="Cauliflower">Cauliflower</SelectItem>
            <SelectItem textValue="Potatoes">Potatoes</SelectItem>
          </SelectSection>
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
