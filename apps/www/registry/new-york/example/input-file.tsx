import { TextField } from "react-aria-components"

import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export default function InputFile() {
  return (
    <TextField
      type="file"
      className="grid w-full max-w-sm items-center gap-1.5"
    >
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" />
    </TextField>
  )
}
