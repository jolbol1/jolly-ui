import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focus-visible]:outline-none data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow data-[hovered]:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm data-[hovered]:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm data-[hovered]:bg-secondary/80",
        ghost: "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
        link: "text-primary underline-offset-4 data-[hovered]:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
