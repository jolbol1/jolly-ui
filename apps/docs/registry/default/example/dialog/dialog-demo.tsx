import { Button } from "@/registry/default/ui/button"
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export function DialogDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Edit Profile</Button>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </p>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
export default DialogDemo
