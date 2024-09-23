"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Block } from "@/registry/schema"

export function BlockWrapper({
  block,
  children,
}: React.PropsWithChildren<{ block: Block }>) {
  return children
}
