import { ReactNode } from "react"
import { TabsProps, composeRenderProps } from "react-aria-components"

import { useThemeStore } from "@/lib/use-theme-store"
import { cn } from "@/lib/utils"
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"

interface PackageManagerTabs extends Omit<TabsProps, "children"> {
  children: ReactNode
}

export function PackageManagerTabs({ children, ...props }: PackageManagerTabs) {
  const pm = useThemeStore((state) => state.packageManager)
  const updatePm = useThemeStore((state) => state.setPackageManager)
  return (
    <Tabs
      defaultSelectedKey={pm}
      selectedKey={pm}
      onSelectionChange={(key) => updatePm(key as any)}
      className={cn("mt-2 gap-0", props.className)}
      {...props}
    >
      <TabList className="justify-start overflow-y-hidden overflow-x-scroll rounded-none rounded-t-md border bg-[rgb(13,_17,_23)] p-0">
        <Tab
          id="npm"
          className="install-selected relative flex h-full items-center rounded-none p-0 px-4 first:rounded-tl-md"
        >
          NPM
        </Tab>
        <Tab
          id="pnpm"
          className="install-selected relative flex h-full items-center rounded-none p-0 px-4 first:rounded-tl-md"
        >
          PNPM
        </Tab>
        <Tab
          id="bun"
          className="install-selected relative flex h-full items-center rounded-none p-0 px-4 first:rounded-tl-md"
        >
          Bun
        </Tab>
        <Tab
          id="yarn"
          className="install-selected relative flex h-full items-center rounded-none p-0 px-4 first:rounded-tl-md"
        >
          Yarn
        </Tab>
      </TabList>
      {children}
    </Tabs>
  )
}

export const PackageManagerContent = ({
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabPanel> & {
  value: "npm" | "pnpm" | "bun" | "yarn"
}) => (
  <TabPanel
    id={value}
    className={cn(
      "mt-0 [&>figure>pre]:m-0 [&>figure>pre]:rounded-t-none [&>figure>pre]:border-t-0",
      className
    )}
    {...props}
  />
)
