"use client"

import { Link } from "react-aria-components"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/shadcn/ui/card"
import { Button } from "@/registry/new-york/ui/button"
import { Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/textfield"

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export const iframeHeight = "600px"

export const containerClassName =
  "w-full h-screen flex items-center justify-center px-4"

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <TextField className="grid gap-2">
            <Label>Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </TextField>
          <TextField className="grid gap-2">
            <div className="flex items-center">
              <Label>Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </TextField>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
