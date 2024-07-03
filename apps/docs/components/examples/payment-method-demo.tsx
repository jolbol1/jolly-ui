"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/default/ui/button"
import { Label } from "@/registry/default/ui/field"
import { Input } from "@/registry/default/ui/input"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

// TODO: Use form best practices
// TODO: Look into select items and textValue needed issue

export function CardsPaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup
          aria-label="Payment Method"
          defaultValue="card"
          className="grid grid-cols-3 gap-4"
        >
          <div>
            <Radio
              value="card"
              id="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground data-[selected]:border-primary [&>.jolly-Radio]:hidden"
              aria-label="Card"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 size-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
              Card
            </Radio>
          </div>

          <div>
            <Radio
              value="paypal"
              id="paypal"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground data-[selected]:border-primary [&>.jolly-Radio]:hidden"
              aria-label="Paypal"
            >
              <Icons.paypal aria-hidden className="mb-3 size-6" />
              Paypal
            </Radio>
          </div>

          <div>
            <Radio
              value="apple"
              id="apple"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground data-[selected]:border-primary [&>.jolly-Radio]:hidden"
              aria-label="Apple"
            >
              <Icons.apple aria-hidden className="mb-3 size-6" />
              Apple
            </Radio>
          </div>
        </RadioGroup>
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="First Last" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="number">Card number</Label>
          <Input id="number" placeholder="" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="month">Expires</Label>
            <Select placeholder="Month" aria-label="Month Selector">
              <SelectTrigger id="month" aria-label="Month">
                <SelectValue />
              </SelectTrigger>
              <SelectPopover>
                <SelectListBox>
                  <SelectItem textValue="January" id="1">
                    January
                  </SelectItem>
                  <SelectItem textValue="Febuary" id="2">
                    February
                  </SelectItem>
                  <SelectItem textValue="March" id="3">
                    March
                  </SelectItem>
                  <SelectItem textValue="April" id="4">
                    April
                  </SelectItem>
                  <SelectItem textValue="May" id="5">
                    May
                  </SelectItem>
                  <SelectItem textValue="June" id="6">
                    June
                  </SelectItem>
                  <SelectItem textValue="July" id="7">
                    July
                  </SelectItem>
                  <SelectItem textValue="August" id="8">
                    August
                  </SelectItem>
                  <SelectItem textValue="September" id="9">
                    September
                  </SelectItem>
                  <SelectItem textValue="October" id="10">
                    October
                  </SelectItem>
                  <SelectItem textValue="November" id="11">
                    November
                  </SelectItem>
                  <SelectItem textValue="December" id="12">
                    December
                  </SelectItem>
                </SelectListBox>
              </SelectPopover>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="year">Year</Label>
            <Select placeholder="Year" aria-label="Year Selector">
              <SelectTrigger id="year" aria-label="Year">
                <SelectValue />
              </SelectTrigger>
              <SelectPopover>
                <SelectListBox>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem
                      textValue={`${new Date().getFullYear() + i}`}
                      key={i}
                      id={`${new Date().getFullYear() + i}`}
                    >
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectListBox>
              </SelectPopover>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input id="cvc" placeholder="CVC" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}
