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
        url: "https://jolly-ui-git-og-jolbol1-s-team.vercel.app/date-picker.png",
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
        <img
          src={"/date-picker.png"}
          alt={"Datepicker component"}
          className="w-full object-cover"
        />
        <div className="flex space-x-3 bg-gray-100 p-5">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-gray-700">DatePicker</h1>
            <p className="text-sm text-gray-500">
              install with npx shadcn add
              https://jollyui.dev/default/date-picker
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
