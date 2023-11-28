import { Button } from "@/registry/default/ui/button"

export default function ButtonPress() {
  return <Button onPress={() => alert("You pressed me")}>Button</Button>
}
