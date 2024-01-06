import { Button } from "@/registry/default/ui/button"
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"

export function DialogAlertDemo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Edit Profile</Button>
      <DialogOverlay isDismissable={false}>
        <DialogContent role="alertdialog" closeButton={false}>
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
              <DialogFooter>
                <Button variant="outline" autoFocus onPress={close}>
                  Cancel
                </Button>
                <Button variant="destructive" onPress={close}>
                  Continue
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
export default DialogAlertDemo
