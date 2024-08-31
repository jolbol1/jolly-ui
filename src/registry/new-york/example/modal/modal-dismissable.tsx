import { Button } from "@/registry/new-york/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"

export default function ModalDismissable() {
  return (
    <DialogTrigger>
      <Button variant="outline">Delete...</Button>
      <DialogOverlay isDismissable={false}>
        <DialogContent role="alertdialog" className="sm:max-w-[425px]">
          {({ close }) => (
            <>
              <DialogHeader>
                <DialogTitle>Delete file</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                This will permanently delete the selected file. Continue?
              </DialogDescription>
              <DialogFooter>
                <Button onPress={close}>Cancel</Button>
                <Button variant="destructive" onPress={close}>
                  Delete
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
