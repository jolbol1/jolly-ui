import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export function SelectLinks() {
  return (
    <Select placeholder="Select an item" aria-label="projects">
      <SelectTrigger className="w-[180px]">
        <SelectValue />
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
