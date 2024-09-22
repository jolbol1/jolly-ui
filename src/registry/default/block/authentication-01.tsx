"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/shadcn/ui/card"
import { Button } from "@/registry/default/ui/button"
import { Label } from "@/registry/default/ui/field"
import { Input, TextField } from "@/registry/default/ui/textfield"

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export const iframeHeight = "600px"

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4"

export default function LoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <TextField className="grid gap-2">
          <Label>Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </TextField>
        <TextField className="grid gap-2">
          <Label>Password</Label>
          <Input id="password" type="password" required />
        </TextField>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}
