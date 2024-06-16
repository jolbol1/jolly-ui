import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  Input as AriaInput,
  InputProps as AriaInputProps,
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

function SearchFieldInput({ className, ...props }: AriaInputProps) {
  return (
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "min-w-0  flex-1 bg-background px-2 py-1.5 outline outline-0 [&::-webkit-search-cancel-button]:hidden",
          className
        )
      )}
      {...props}
    />
  )
}

function SearchField({ className, ...props }: AriaSearchFieldProps) {
  return (
    <AriaSearchField
      className={composeRenderProps(className, (className) =>
        cn(
          "group flex h-10 w-full items-center overflow-hidden rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 group-data-[disabled]:opacity-50",
          className
        )
      )}
      {...props}
    />
  )
}

function SearchFieldClear({ className, ...props }: AriaButtonProps) {
  return (
    <AriaButton
      className={composeRenderProps(className, (className) =>
        cn(
          "mr-1 rounded-sm opacity-70 ring-offset-background transition-opacity data-[hovered]:opacity-100 group-data-[disabled]:pointer-events-none group-data-[empty]:invisible",
          className
        )
      )}
      {...props}
    />
  )
}

export { SearchField, SearchFieldInput, SearchFieldClear }
