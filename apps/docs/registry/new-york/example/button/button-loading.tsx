import { Loader2 } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

export default function ButtonLoading() {
  return (
    <Button isDisabled>
      <Loader2 className="mr-2 size-4 animate-spin" />
      Please wait
    </Button>
  )
}
