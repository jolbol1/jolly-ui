import { tv } from "tailwind-variants"

const focusRing = tv({
  base: "outline-none ring-offset-background transition-colors",
  variants: {
    isFocusVisible: {
      true: "outline-none ring-2 ring-ring ring-offset-2",
    },
  },
})

export { focusRing }
