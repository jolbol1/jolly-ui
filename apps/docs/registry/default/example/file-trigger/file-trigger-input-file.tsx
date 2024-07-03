import { Label } from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/textfield"

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input type="file" id="picture" />
    </div>
  )
}
export default InputFile
