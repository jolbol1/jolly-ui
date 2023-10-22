"use client"

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york/ui/alert-dialog"
import { Button } from "@/registry/new-york/ui/button"

export default function AlertDialogDemo() {
  return (
    <AlertDialogTrigger>
      <Button variant="outline">Show Dialog</Button>
      <AlertDialogContent>
        {({ close }) => (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel autoFocus onPress={close}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onPress={close}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialogTrigger>
  )
}
