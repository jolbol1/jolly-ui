import { ReactNode } from "react"
import { useRouter } from "@tanstack/react-router"
import { RouterProvider } from "react-aria-components"

/** Lets React Aria links (and the registry `Link`) navigate client-side. */
export function AriaProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  return (
    <RouterProvider navigate={(href) => router.navigate({ href })}>
      {children}
    </RouterProvider>
  )
}
