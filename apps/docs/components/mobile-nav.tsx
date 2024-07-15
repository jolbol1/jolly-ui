"use client"

import * as React from "react"
import {
  Header,
  Link,
  ListBox,
  ListBoxItem,
  Section,
} from "react-aria-components"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import {
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"

export function MobileNav() {
  return (
    <>
      <DialogTrigger>
        <Button variant="ghost" size="icon" className="text-primary md:hidden">
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <DialogOverlay>
          <DialogContent side="left" className="w-3/4 px-0">
            {({ close }) => (
              <>
                <div className="p-4">
                  <Link
                    href="/"
                    className="flex w-fit items-center"
                    onPress={() => close()}
                  >
                    <Icons.logo className="mr-2 size-4 text-primary" />
                    <span className="font-bold text-primary">
                      {siteConfig.name}
                    </span>
                  </Link>
                </div>
                <div className="h-[calc(100vh-8rem)] overflow-y-auto p-4 pb-10 pt-1">
                  <ListBox
                    onAction={() => close()}
                    aria-label="Main Navigation"
                    className="flex flex-col space-y-3"
                  >
                    <Section
                      aria-label="Main Navigation"
                      className="flex flex-col space-y-3"
                    >
                      {docsConfig.mainNav?.map(
                        (item) =>
                          item.href && (
                            <ListBoxItem
                              textValue={item.title}
                              key={item.href}
                              href={item.href}
                            >
                              {item.title}
                            </ListBoxItem>
                          )
                      )}
                    </Section>
                    {/* <div className="flex flex-col space-y-2"> */}
                    {docsConfig.sidebarNav.map((item) => (
                      <Section
                        id={item.title}
                        key={item.title}
                        className="flex flex-col space-y-3 pt-6"
                      >
                        <Header className="font-medium">{item.title}</Header>
                        {item?.items?.length &&
                          item.items.map((item) => (
                            <React.Fragment key={item.href}>
                              {!item.disabled &&
                                (item.href ? (
                                  <ListBoxItem
                                    href={item.href}
                                    className="text-muted-foreground"
                                    textValue={item.title}
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
                                  </ListBoxItem>
                                ) : (
                                  item.title
                                ))}
                            </React.Fragment>
                          ))}
                      </Section>
                    ))}
                    {/* </div> */}
                  </ListBox>
                </div>
              </>
            )}
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
      <Link href="/" className="flex items-center space-x-2 p-2 md:hidden">
        <span className=" font-bold text-primary ">{siteConfig.name}</span>
      </Link>
    </>
  )
}
