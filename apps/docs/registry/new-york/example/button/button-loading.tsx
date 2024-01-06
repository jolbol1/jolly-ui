import { ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"

export function ButtonLoading() {
  return (
    <Button isDisabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}
export default ButtonLoading
