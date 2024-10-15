"use client"

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  MenuIcon,
  Package2,
  Search,
  SearchIcon,
  Users,
  XIcon,
} from "lucide-react"
import { Link } from "react-aria-components"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/shadcn/ui/avatar"
import { Badge } from "@/registry/default/shadcn/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/shadcn/ui/card"
import { Button } from "@/registry/default/ui/button"
import {
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import { FieldGroup } from "@/registry/default/ui/field"
import { Link as ButtonLink } from "@/registry/default/ui/link"
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/default/ui/menu"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/registry/default/ui/table"

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export const iframeHeight = "825px"

export const containerClassName = "w-full h-full"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="size-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Analytics
          </Link>
        </nav>
        <DialogTrigger>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="size-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <DialogOverlay />
          <DialogContent side="left" className="sm:max-w-sm">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="size-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </DialogContent>
        </DialogTrigger>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <SearchField className="max-w-[200px]">
              <FieldGroup>
                <SearchIcon
                  aria-hidden
                  className="size-4 text-muted-foreground"
                />
                <SearchFieldInput placeholder="Search..." />
                <SearchFieldClear>
                  <XIcon aria-hidden className="size-4" />
                </SearchFieldClear>
              </FieldGroup>
            </SearchField>
          </form>
          <MenuTrigger>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="size-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
            <MenuPopover placement="bottom">
              <Menu>
                <MenuSection>
                  <MenuHeader>My Account</MenuHeader>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Support</MenuItem>
                </MenuSection>
                <MenuSeparator />
                <MenuItem>Logout</MenuItem>
              </Menu>
            </MenuPopover>
          </MenuTrigger>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
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
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden size-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden size-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden size-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden size-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden size-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
