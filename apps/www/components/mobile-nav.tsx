"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ViewVerticalIcon } from "@radix-ui/react-icons"
import { XIcon } from "lucide-react"
import {
  Button as _Button,
  Dialog as _Dialog,
  DialogTrigger as _DialogTrigger,
  Modal as _Modal,
  ModalOverlay as _ModalOverlay,
} from "react-aria-components"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <_DialogTrigger isOpen={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <ViewVerticalIcon className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <_ModalOverlay isDismissable className="fixed inset-0 z-[51]">
        <_Modal className="fixed inset-y-0 left-0 w-3/4 border-r border-border bg-popover pr-0">
          <_Dialog className="relative flex h-full flex-col overflow-hidden p-3  focus:outline-none">
            {({ close }) => (
              <>
                <Button
                  className="absolute right-1 top-1 "
                  size="icon"
                  variant="ghost"
                  onPress={close}
                >
                  <XIcon />
                </Button>
                <MobileLink
                  href="/"
                  className="flex items-center"
                  onOpenChange={setOpen}
                >
                  <Icons.logo className="mr-2 h-4 w-4 text-primary" />
                  <span className="font-bold text-primary">
                    {siteConfig.name}
                  </span>
                </MobileLink>
                <div className="my-4 h-[calc(100vh-8rem)] overflow-y-auto pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {docsConfig.mainNav?.map(
                      (item) =>
                        item.href && (
                          <MobileLink
                            key={item.href}
                            href={item.href}
                            onOpenChange={setOpen}
                          >
                            {item.title}
                          </MobileLink>
                        )
                    )}
                  </div>
                  <div className="flex flex-col space-y-2">
                    {docsConfig.sidebarNav.map((item, index) => (
                      <div key={index} className="flex flex-col space-y-3 pt-6">
                        <h4 className="font-medium">{item.title}</h4>
                        {item?.items?.length &&
                          item.items.map((item) => (
                            <React.Fragment key={item.href}>
                              {!item.disabled &&
                                (item.href ? (
                                  <MobileLink
                                    href={item.href}
                                    onOpenChange={setOpen}
                                    className="text-muted-foreground"
                                  >
                                    {item.title}
                                    {item.label &&
                                      (item.label == "v2" ? (
                                        <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-primary-foreground no-underline group-hover:no-underline ">
                                          {item.label}
                                        </span>
                                      ) : (
                                        <span className="ml-2 rounded-md bg-primary px-1.5 py-0.5 text-xs leading-none text-primary-foreground no-underline group-hover:no-underline ">
                                          {item.label}
                                        </span>
                                      ))}
                                  </MobileLink>
                                ) : (
                                  item.title
                                ))}
                            </React.Fragment>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </_Dialog>
        </_Modal>
      </_ModalOverlay>
    </_DialogTrigger>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
