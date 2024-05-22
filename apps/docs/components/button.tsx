import React from "react"
import { Button as _Button } from "react-aria-components"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/registry/default/ui/button"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <_Button
        className={(values) =>
          cn(
            buttonVariants({
              variant,
              size,
              className:
                typeof className === "function" ? className(values) : className,
            })
          )
        }
        {...props}
        ref={ref}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
