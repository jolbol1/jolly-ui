import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export function SelectDisabled() {
  return (
    <Select
      placeholder="Select an item"
      aria-label="item selection"
      disabledKeys={["cat", "kangaroo"]}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent aria-label="items">
          <SelectItem textValue="Red Panda" id="red panda">
            Red Panda
          </SelectItem>
          <SelectItem textValue="Cat" id="cat">
            Cat
          </SelectItem>
          <SelectItem textValue="Dog" id="dog">
            Dog
          </SelectItem>
          <SelectItem textValue="Aardvark" id="aardvark">
            Aardvark
          </SelectItem>
          <SelectItem textValue="Kangaroo" id="kangaroo">
            Kangaroo
          </SelectItem>
          <SelectItem textValue="Snake" id="snake">
            Snake
          </SelectItem>
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
export default SelectDisabled
