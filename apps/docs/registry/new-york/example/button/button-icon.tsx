import { ChevronRight } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" aria-label="Next">
      <ChevronRight className="size-4" />
    </Button>
  )
}
