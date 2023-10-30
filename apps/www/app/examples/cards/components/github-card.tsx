"use client"

import React from "react"
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"
import type { Selection } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuPopover,
  DropdownMenuSection,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"
import { Separator } from "@/registry/new-york/ui/separator"

export function DemoGithub() {
  let [selected, setSelected] = React.useState<Selection>(new Set(["future"]))

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>shadcn/ui</CardTitle>
          <CardDescription>
            Beautifully designed components built with Radix UI and Tailwind
            CSS.
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" className="px-3 shadow-none">
            <StarIcon className="mr-2 h-4 w-4" />
            Star
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenuTrigger>
            <Button variant="secondary" className="px-2 shadow-none">
              <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
            </Button>
            <DropdownMenuPopover placement="bottom end">
              <DropdownMenuContent
                selectedKeys={selected}
                onSelectionChange={setSelected}
                selectionMode="multiple"
                className="w-[200px]"
              >
                <DropdownMenuSection>
                  <DropdownMenuHeader separator>
                    Suggested Lists
                  </DropdownMenuHeader>
                  <DropdownMenuCheckboxItem id="future">
                    Future Ideas
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem id="stack">
                    My Stack
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem id="inspo">
                    Inspiration
                  </DropdownMenuCheckboxItem>
                </DropdownMenuSection>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusIcon className="mr-2 h-4 w-4" /> Create List
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPopover>
          </DropdownMenuTrigger>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            TypeScript
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            20k
          </div>
          <div>Updated April 2023</div>
        </div>
      </CardContent>
    </Card>
  )
}
