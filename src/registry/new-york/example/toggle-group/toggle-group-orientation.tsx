import { Toggle, ToggleButtonGroup } from "@/registry/new-york/ui/toggle"

export default function ToggleGroupOrientation() {
  return (
    <ToggleButtonGroup orientation="vertical">
      <Toggle id="grid">Grid</Toggle>
      <Toggle id="list">List</Toggle>
      <Toggle id="gallery">Gallery</Toggle>
    </ToggleButtonGroup>
  )
}
