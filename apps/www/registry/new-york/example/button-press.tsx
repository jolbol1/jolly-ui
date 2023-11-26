import { Button } from "@/registry/new-york/ui/button"

export default function ButtonPress() {
  return <Button onPress={() => alert("You pressed me")}>Button</Button>
}
