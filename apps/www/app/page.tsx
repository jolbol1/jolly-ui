import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ThemeSheet } from "@/components/theme-sheet"
import { buttonVariants } from "@/registry/new-york/ui/button-variants"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="text-primary">JollyUI</PageHeaderHeading>
        <PageHeaderDescription>
          <Link
            className="font-medium text-black hover:text-gray-800 hover:underline dark:text-white hover:dark:text-gray-300"
            target="_blank"
            href="https://ui.shadcn.com/"
          >
            shadcn/ui
          </Link>{" "}
          designed{" "}
          <Link
            href="https://react-spectrum.adobe.com/react-aria/index.html"
            className="font-medium text-red-600 hover:text-red-300 hover:underline"
          >
            react aria components
          </Link>{" "}
          that you can copy and paste into your apps. Accessible. Customizable.
          Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <ThemeSheet theme="outline" />
        </PageActions>
      </PageHeader>
      {/* <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <MailPage />
        </div>
      </section> */}
    </div>
  )
}
