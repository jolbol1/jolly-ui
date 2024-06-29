import { Mail } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

export default function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="mr-2 size-4" /> Login with Email
    </Button>
  )
}
