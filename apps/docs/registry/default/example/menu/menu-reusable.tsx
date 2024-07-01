import { JollyMenu, MenuItem } from "@/registry/default/ui/menu"

export default function MenuReusable() {
  return (
    <JollyMenu variant="outline" label="Edit">
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <MenuItem>Delete Item</MenuItem>
    </JollyMenu>
  )
}
