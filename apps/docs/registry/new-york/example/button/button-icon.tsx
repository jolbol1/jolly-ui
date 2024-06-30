import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon" aria-label="Next">
      <ChevronRightIcon className="size-4" />
    </Button>
  )
}
