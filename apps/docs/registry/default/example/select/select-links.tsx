import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export function SelectLinks() {
  return (
    <Select aria-label="projects">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select an item" />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent aria-label="items">
          <SelectItem href="https://example.com/" target="_blank">
            Create new…
          </SelectItem>
          <SelectItem textValue="Proposal">Proposal</SelectItem>
          <SelectItem textValue="Budget">Budget</SelectItem>
          <SelectItem textValue="Onboarding">Onboarding</SelectItem>
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
export default SelectLinks
