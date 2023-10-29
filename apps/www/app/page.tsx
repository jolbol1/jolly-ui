import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button-variants"
import { Separator } from "@/registry/new-york/ui/separator"
import DashboardPage from "@/app/examples/dashboard/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Build your component library.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <p className="text-sm text-[#E1251B]">
          This is an unofficial port of{" "}
          <a
            className="font-medium underline underline-offset-4"
            href={"https://ui.shadcn.com/"}
          >
            shadcn/ui
          </a>{" "}
          to react-aria-components, and is not affiliated with{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://twitter.com/shadcn"
          >
            @shadcn
          </a>
          , just inspired by him.
        </p>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <DashboardPage />
        </div>
      </section>
    </div>
  )
}
