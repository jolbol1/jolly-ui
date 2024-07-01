import { Link } from "@/registry/default/ui/link"

import { CardDescription, CardHeader, CardTitle } from "./card"

const componentCards = {
  button: {
    name: "Button",
    description:
      "A button allows a user to perform an action, with mouse, touch, and keyboard interactions.",
    href: "/docs/components/button",
  },
  checkbox: {
    name: "Checkbox",
    description:
      "A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.",
    href: "/docs/components/checkbox",
  },
  popover: {
    name: "Popover",
    description:
      "A popover is an overlay element positioned relative to a trigger.",
    href: "/docs/components/popover",
  },
  label: {
    name: "Label",
    description: "A label provides context for an element.",
    href: "/docs/components/label",
  },
  datefield: {
    name: "DateField",
    description:
      "A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.",
    href: "/docs/components/datefield",
  },
  dialog: {
    name: "Dialog",
    description:
      "A dialog is an overlay shown above other content in an application.",
    href: "/docs/components/dialog",
  },
  calendar: {
    name: "Calendar",
    description:
      "A calendar displays one or more date grids and allows users to select a single date.",
    href: "/docs/components/calendar",
  },
}

type Components = keyof typeof componentCards

export function ComponentCard({ component }: { component: Components }) {
  const componentData = componentCards[component]
  return (
    <Link
      aria-label={componentData.name}
      variant="outline"
      className="h-auto w-full whitespace-normal text-balance p-0 sm:w-[220px]"
      href={componentData.href}
    >
      <CardHeader className="w-full p-4">
        <CardTitle className="text-xl">{componentData.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {componentData.description}
        </CardDescription>
      </CardHeader>
    </Link>
  )
}

export function ComponentCards({ children }: { children: React.ReactNode }) {
  return <section className="mt-4 flex flex-wrap gap-4">{children}</section>
}
