import { Button } from "@/registry/default/ui/button"

export function ButtonPress() {
  return <Button onPress={() => alert("You pressed me")}>Button</Button>
}

export default ButtonPress
