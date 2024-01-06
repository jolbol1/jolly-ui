import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { CardsCookieSettings } from "@/components/examples/cookie-settings-demo"
import { CardsCreateAccount } from "@/components/examples/create-account-demo"
import { CardDatePicker } from "@/components/examples/datepicker-demo"
import { CardsPaymentMethod } from "@/components/examples/payment-method-demo"
import TabsDemo from "@/components/examples/tabs-demo"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { Link } from "@/registry/new-york/ui/link"

export default function Page() {
  return (
    <div className="container relative">
      <section
        className={cn(
          "mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
        )}
      >
        <Announcement />
        <h1
          className={cn(
            "my-4 text-center text-6xl font-bold leading-tight tracking-tighter text-primary md:text-6xl lg:leading-[1.1]"
          )}
        >
          JollyUI
        </h1>
        <p className="max-w-[750px] text-balance text-center text-lg text-muted-foreground sm:text-xl">
          <Link
            className="text-md p-0 font-medium text-black hover:text-gray-800 dark:text-white hover:dark:text-gray-300"
            target="_blank"
            variant="link"
            href="https://ui.shadcn.com/"
          >
            shadcn/ui
          </Link>{" "}
          compatible{" "}
          <Link
            href="https://react-spectrum.adobe.com/react-aria/index.html"
            variant="link"
            className="text-md p-0 font-medium text-red-600 hover:text-red-300 "
          >
            react aria components
          </Link>{" "}
          that you can copy and paste into your apps. Accessible. Customizable.
          Open Source.
        </p>
        <div
          className={cn(
            "flex w-full items-center justify-center space-x-4 py-4 md:pb-10"
          )}
        >
          {" "}
          <Link variant="outline" href="/docs" className="h-9">
            Get Started
          </Link>
          <ThemeCustomizer />
        </div>
      </section>
      <h2></h2>
      <section className=" grid items-start justify-center gap-6 rounded-lg p-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-2 grid items-start gap-6 md:col-span-1">
          <CardsPaymentMethod />
        </div>
        <div className="col-span-2 grid items-start gap-6 md:col-span-1">
          <CardsCreateAccount />
          <CardDatePicker />
        </div>
        <div className="col-span-2 grid items-start gap-6 md:col-span-1">
          <CardsCookieSettings />
          <TabsDemo />
        </div>
      </section>
    </div>
  )
}
