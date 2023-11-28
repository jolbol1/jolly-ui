import { Breadcrumbs } from "@/registry/default/ui/breadcrumbs"
import { BreadcrumbItem } from "@/registry/new-york/ui/breadcrumbs"

export default function BreadcrumbsDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}
//
