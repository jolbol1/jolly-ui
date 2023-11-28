// app/provider.tsx
"use client"

import { useRouter } from "next/navigation"
import { RouterProvider } from "react-aria-components"

function _RouterProvider({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof RouterProvider>, "navigate">) {
  let router = useRouter()

  return (
    <RouterProvider navigate={router.push} {...props}>
      {children}
    </RouterProvider>
  )
}

export { _RouterProvider as RouterProvider }
