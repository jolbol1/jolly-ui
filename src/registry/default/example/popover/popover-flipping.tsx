import { Button } from "@/registry/default/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/default/ui/popover"

export default function PopoverFlipping() {
  return (
    <div className="flex gap-4">
      <PopoverTrigger>
        <Button variant="outline">Default</Button>
        <Popover placement="bottom">
          <PopoverDialog className="max-w-[150px]">
            This is a popover that will flip if it can't fully render below the
            button.
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
      <PopoverTrigger>
        <Button variant="outline">shouldFlip=false</Button>
        <Popover placement="bottom" shouldFlip={false}>
          <PopoverDialog className="max-w-[150px]">
            This is a popover that won't flip if it can't fully render below the
            button.
          </PopoverDialog>
        </Popover>
      </PopoverTrigger>
    </div>
  )
}
