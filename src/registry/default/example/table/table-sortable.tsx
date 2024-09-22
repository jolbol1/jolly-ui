"use client"

import { useAsyncList } from "react-stately"

import {
  Cell,
  Column,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/registry/default/ui/table"

export default function TableSortable() {
  interface Character {
    name: string
    height: number
    mass: number
    birth_year: number
  }

  let list = useAsyncList<Character>({
    async load({ signal }) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal,
      })
      let json = await res.json()
      return {
        items: json.results,
      }
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          // @ts-ignore
          let first = a[sortDescriptor.column]
          // @ts-ignore
          let second = b[sortDescriptor.column]
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1
          if (sortDescriptor.direction === "descending") {
            cmp *= -1
          }
          return cmp
        }),
      }
    },
  })

  return (
    <div className="flex size-full items-center justify-center p-12">
      <div className="relative w-full overflow-auto rounded-md border">
        <Table
          aria-label="Example table with client side sorting"
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
        >
          <TableHeader>
            <Column id="name" isRowHeader allowsSorting>
              Name
            </Column>
            <Column id="height" allowsSorting>
              Height
            </Column>
            <Column id="mass" allowsSorting>
              Mass
            </Column>
            <Column id="birth_year" allowsSorting>
              Birth Year
            </Column>
          </TableHeader>
          <TableBody
            items={list.items}
            renderEmptyState={() => "No results found."}
          >
            {(item) => (
              <Row id={item.name}>
                <Cell>{item.name}</Cell>
                <Cell>{item.height}</Cell>
                <Cell>{item.mass}</Cell>
                <Cell>{item.birth_year}</Cell>
              </Row>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
