import React from "react"
import { Key } from "react-aria-components"

import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/new-york/ui/breadcrumbs"

export function BreadcrumbsItems() {
  let [breadcrumbs, setBreadcrumbs] = React.useState([
    { id: 1, label: "Home" },
    { id: 2, label: "Trendy" },
    { id: 3, label: "March 2022 Assets" },
  ])

  let navigate = (id: Key) => {
    let i = breadcrumbs.findIndex((item) => item.id === id)
    setBreadcrumbs(breadcrumbs.slice(0, i + 1))
  }

  return (
    <Breadcrumbs items={breadcrumbs} onAction={navigate}>
      {(item) => (
        <BreadcrumbItem className="last:font-normal last:text-foreground last:[&>span]:last:hidden">
          <BreadcrumbLink>{item.label}</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      )}
    </Breadcrumbs>
  )
}
export default BreadcrumbsItems
