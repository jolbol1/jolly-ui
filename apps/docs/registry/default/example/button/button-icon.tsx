import { ChevronRight } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" aria-label="Next">
      <ChevronRight className="h-4 w-4" />
    </Button>
  )
}

export default ButtonIcon
