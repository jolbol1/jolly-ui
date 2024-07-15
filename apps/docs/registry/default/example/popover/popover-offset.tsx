import { Button } from "@/registry/default/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

export default function PopoverOffset() {
  return (
    <PopoverTrigger>
      <Button variant="outline">Offset</Button>
      <Popover offset={50}>
        <PopoverDialog>Offset by an additional 50px.</PopoverDialog>
      </Popover>
    </PopoverTrigger>
  )
}
