"use client"

import { Link } from "react-aria-components"

import { buttonVariants } from "@/registry/new-york/ui/button"

export default function ButtonLink() {
  return <Link className={buttonVariants({ variant: "link" })}>Link</Link>
}
