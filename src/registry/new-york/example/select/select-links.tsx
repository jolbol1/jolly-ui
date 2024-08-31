import { Label } from "@/registry/new-york/ui/field"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export default function SelectLinks() {
  return (
    <Select className="w-[200px]" placeholder="Select an item">
      <Label>Project</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          <SelectItem href="https://example.com/" target="_blank">
            Create new…
          </SelectItem>
          <SelectItem>Proposal</SelectItem>
          <SelectItem>Budget</SelectItem>
          <SelectItem>Onboarding</SelectItem>
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
