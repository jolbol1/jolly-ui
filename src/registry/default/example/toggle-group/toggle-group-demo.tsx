import { Toggle, ToggleButtonGroup } from "@/registry/default/ui/toggle"

export default function ToggleGroupDemo() {
  return (
    <ToggleButtonGroup defaultSelectedKeys={["left"]}>
      <Toggle id="left">Left</Toggle>
      <Toggle id="center">Center</Toggle>
      <Toggle id="right">Right</Toggle>
    </ToggleButtonGroup>
  )
}
