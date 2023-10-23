"use client"

import { useEffect, useState } from "react"
import { MixerHorizontalIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Collection, type Selection } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>
}

function findMissingElements(baseSet: Set<string>, compareSet: Set<string>) {
  const missingElements = new Set()

  for (let elem of baseSet) {
    if (!compareSet.has(elem)) {
      missingElements.add(elem)
    }
  }

  return missingElements
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const selectedKeys = new Set(table.getVisibleFlatColumns().map((c) => c.id))

  const handleChange = (keys: Selection) => {
    const missing = findMissingElements(selectedKeys, keys as Set<string>)
    const missing2 = findMissingElements(keys as Set<string>, selectedKeys)
    missing.forEach((key) => {
      table.getColumn(key as string)?.toggleVisibility(false)
    })
    missing2.forEach((key) => {
      table.getColumn(key as string)?.toggleVisibility(true)
    })
  }

  return (
    <DropdownMenuTrigger>
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
      >
        <MixerHorizontalIcon className="mr-2 h-4 w-4" />
        View
      </Button>
      <DropdownMenuContent
        selectionMode="multiple"
        placement="bottom end"
        className="w-[150px]"
        selectedKeys={selectedKeys}
        onSelectionChange={handleChange}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        </DropdownMenuGroup>
        <Collection
          items={table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== "undefined" && column.getCanHide()
            )}
        >
          {(item) => (
            <DropdownMenuCheckboxItem
              id={item.id}
              key={item.id}
              className="capitalize"
            >
              {item.id}
            </DropdownMenuCheckboxItem>
          )}
          {/* {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            )
          })} */}
        </Collection>
      </DropdownMenuContent>
    </DropdownMenuTrigger>
  )
}
