import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"

export default function PopoverPosition() {
  return (
    <div className="flex gap-4">
      <PopoverTrigger>
        <Button variant="outline" size="icon">
          ⬅️
        </Button>
        <Popover placement="start">
          <PopoverDialog className="max-w-[150px]">
            In left-to-right, this is on the left. In right-to-left, this is on
            the right.
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="outline" size="icon">
          ⬆️
        </Button>
        <Popover placement="top">
          <PopoverDialog className="max-w-[150px]">
            This popover is above the button.
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="outline" size="icon">
          ⬇️
        </Button>
        <Popover placement="bottom">
          <PopoverDialog className="max-w-[150px]">
            This popover is below the button.
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="outline" size="icon">
          ➡️
        </Button>
        <Popover placement="end">
          <PopoverDialog className="max-w-[150px]">
            In left-to-right, this is on the right. In right-to-left, this is on
            the left.
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
    </div>
  )
}
