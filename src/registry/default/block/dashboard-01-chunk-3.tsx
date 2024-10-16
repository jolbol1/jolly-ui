"use client"

import { Activity } from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/shadcn/ui/card"

export default function Component() {
  return (
    <Card x-chunk="dashboard-01-chunk-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Active Now</CardTitle>
        <Activity className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+573</div>
        <p className="text-xs text-muted-foreground">+201 since last hour</p>
      </CardContent>
    </Card>
  )
}
