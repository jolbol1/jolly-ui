import { Loader2 } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export function ButtonLoading() {
  return (
    <Button isDisabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}

export default ButtonLoading
