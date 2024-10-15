"use client"

import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/registry/default/shadcn/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/shadcn/ui/card"
import { Link as ButtonLink } from "@/registry/default/ui/link"
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/registry/default/ui/table"

export default function Component() {
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>
            Recent transactions from your store.
          </CardDescription>
        </div>
        <ButtonLink size="sm" className="ml-auto gap-1" href="#">
          View All
          <ArrowUpRight className="size-4" />
        </ButtonLink>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <Column>Customer</Column>
            <Column className="hidden xl:table-column" isRowHeader>
              Type
            </Column>
            <Column className="hidden xl:table-column">Status</Column>
            <Column className="hidden xl:table-column">Date</Column>
            <Column className="[&_div]:justify-end">Amount</Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </Cell>
              <Cell className="hidden xl:table-column">Sale</Cell>
              <Cell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </Cell>
              <Cell className="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-23
              </Cell>
              <Cell className="text-right">$250.00</Cell>
            </Row>
            <Row>
              <Cell>
                <div className="font-medium">Olivia Smith</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  olivia@example.com
                </div>
              </Cell>
              <Cell className="hidden xl:table-column">Refund</Cell>
              <Cell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  Declined
                </Badge>
              </Cell>
              <Cell className="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-24
              </Cell>
              <Cell className="text-right">$150.00</Cell>
            </Row>
            <Row>
              <Cell>
                <div className="font-medium">Noah Williams</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  noah@example.com
                </div>
              </Cell>
              <Cell className="hidden xl:table-column">Subscription</Cell>
              <Cell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </Cell>
              <Cell className="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-25
              </Cell>
              <Cell className="text-right">$350.00</Cell>
            </Row>
            <Row>
              <Cell>
                <div className="font-medium">Emma Brown</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  emma@example.com
                </div>
              </Cell>
              <Cell className="hidden xl:table-column">Sale</Cell>
              <Cell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </Cell>
              <Cell className="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-26
              </Cell>
              <Cell className="text-right">$450.00</Cell>
            </Row>
            <Row>
              <Cell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </Cell>
              <Cell className="hidden xl:table-column">Sale</Cell>
              <Cell className="hidden xl:table-column">
                <Badge className="text-xs" variant="outline">
                  Approved
                </Badge>
              </Cell>
              <Cell className="hidden md:table-cell lg:hidden xl:table-column">
                2023-06-27
              </Cell>
              <Cell className="text-right">$550.00</Cell>
            </Row>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
