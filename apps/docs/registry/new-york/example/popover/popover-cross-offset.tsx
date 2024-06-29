import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

export default function PopoverCrossOffset() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Cross offset</Button>
      <Popover placement="top" crossOffset={100}>
        <PopoverDialog>Offset by an additional 100px.</PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}
