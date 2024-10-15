"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "react-aria-components"

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumbs"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export function BreadcrumbsDropdown() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="/home">Home</BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <MenuTrigger>
          <Button className="flex items-center gap-1">
            Components
            <ChevronDown className="size-4" />
          </Button>
          <MenuPopover>
            <Menu>
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Themes</MenuItem>
              <MenuItem>GitHub</MenuItem>
            </Menu>
          </MenuPopover>
        </MenuTrigger>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadcrumbsDropdown
