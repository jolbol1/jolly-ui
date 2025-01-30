import { Toggle, ToggleButtonGroup } from "@/registry/new-york/ui/toggle"

export default function ToggleGroupMultiple() {
  return (
    <ToggleButtonGroup selectionMode="multiple">
      <Toggle id="bold">Bold</Toggle>
      <Toggle id="italic">Italic</Toggle>
      <Toggle id="underline">Underline</Toggle>
    </ToggleButtonGroup>
  )
}
