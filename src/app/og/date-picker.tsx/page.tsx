import { Metadata } from "next"
import { notFound, redirect } from "next/navigation"

export const runtime = "edge"

export const metadata: Metadata = {
  title: "JollyUI DatePicker",
  description: "install with npx shadcn add https://jollyui.dev/default/button",
  openGraph: {
    title: "JollyUI DatePicker",
    description:
      "install with npx shadcn add https://jollyui.dev/default/button",
    images: [
      {
        url: "http://localhost:3000/date-picker.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default async function ProxyPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="mx-5 w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 sm:mx-0">
        you shouldnt be here
      </div>
    </main>
  )
}
