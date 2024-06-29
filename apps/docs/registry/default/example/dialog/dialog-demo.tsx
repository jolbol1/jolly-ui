import { Button } from "@/registry/default/ui/button"
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { Input, TextField } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function DialogDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Sign up...</Button>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[425px]">
          {({ close }) => (
            <>
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
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
