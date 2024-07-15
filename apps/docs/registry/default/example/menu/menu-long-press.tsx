import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuLongPress() {
  return (
    <MenuTrigger trigger="longPress">
      <Button variant="outline" onPress={() => alert("crop")}>
        Crop
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem>Rotate</MenuItem>
          <MenuItem>Slice</MenuItem>
          <MenuItem>Clone stamp</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
