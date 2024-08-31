import { Label } from "@/registry/default/ui/field"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function SelectDisabledItems() {
  return (
    <Select
      className="w-[200px]"
      disabledKeys={["cat", "kangaroo"]}
      placeholder="Select an item"
    >
      <Label>Favorite Animal</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectItem id="red panda">Red Panda</SelectItem>
          <SelectItem id="cat">Cat</SelectItem>
          <SelectItem id="dog">Dog</SelectItem>
          <SelectItem id="aardvark">Aardvark</SelectItem>
          <SelectItem id="kangaroo">Kangaroo</SelectItem>
          <SelectItem id="snake">Snake</SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
