import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

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
