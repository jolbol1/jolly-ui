import { BreadcrumbItem, Breadcrumbs } from "@/registry/new-york/ui/breadcrumbs"

export function BreadcrumbsDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadcrumbsDemo
