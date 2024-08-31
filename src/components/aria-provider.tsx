"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"

export function AriaProvider({ children }: { children: ReactNode }) {
  let router = useRouter()
  return <RouterProvider navigate={router.push}>{children}</RouterProvider>
}
