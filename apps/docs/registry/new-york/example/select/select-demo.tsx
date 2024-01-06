import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export function SelectDemo() {
  return (
    <Select aria-label="item selection">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent aria-label="items">
          <SelectItem textValue="Aardvark">Aardvark</SelectItem>
          <SelectItem textValue="Cat">Cat</SelectItem>
          <SelectItem textValue="Dog">Dog</SelectItem>
          <SelectItem textValue="Kangaroo">Kangaroo</SelectItem>
          <SelectItem textValue="Panda">Panda</SelectItem>
          <SelectItem textValue="Snake">Snake</SelectItem>
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
export default SelectDemo
