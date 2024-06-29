import { Button } from "@/registry/new-york/ui/button"
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { Input, TextField } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export default function ModalSheet() {
  return (
    <DialogTrigger>
      <Button variant="outline">Edit Profile</Button>
      <DialogOverlay>
        <DialogContent side="right" className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign up</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <TextField autoFocus>
              <Label>First Name</Label>
              <Input />
            </TextField>
            <TextField>
              <Label>Last Name</Label>
              <Input />
            </TextField>
          </div>
          <DialogFooter>
            <Button onPress={close} type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
