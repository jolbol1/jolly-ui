"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { Calendar } from "@/registry/default/ui/calendar"
import { Popover, PopoverTrigger } from "@/registry/default/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>()

  return (
    <PopoverTrigger>
      <Button
        variant={"outline"}
        className={cn(
          "w-[280px] justify-start text-left font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
      <Popover className="flex w-auto flex-col space-y-2 p-2">
        <Select
          onSelectionChange={(value) =>
            setDate(addDays(new Date(), parseInt(value?.toString())))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectPopover placement="bottom">
            <SelectContent>
              <SelectItem id="0">Today</SelectItem>
              <SelectItem id="1">Tomorrow</SelectItem>
              <SelectItem id="3">In 3 days</SelectItem>
              <SelectItem id="7">In a week</SelectItem>
            </SelectContent>
          </SelectPopover>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </Popover>
    </PopoverTrigger>
  )
}
