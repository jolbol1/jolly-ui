"use client"

import { Button } from "@/registry/default/ui/button"
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"

export default function Demo() {
  return (
    <DialogTrigger>
      <Button variant="outline">Edit Profile</Button>
      <DialogOverlay>
        <DialogContent side="right">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </p>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
