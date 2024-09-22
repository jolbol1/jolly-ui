import { CaretSortIcon } from "@radix-ui/react-icons"
import {
  Cell as AriaCell,
  Column as AriaColumn,
  ColumnProps as AriaColumnProps,
  ResizableTableContainer as AriaResizableTableContainer,
  Row as AriaRow,
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  CellProps,
  ColumnResizer,
  Group,
  ResizableTableContainerProps,
  RowProps,
  TableBodyProps,
  TableHeaderProps,
  TableProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const ResizableTableContainer = AriaResizableTableContainer

const Table = ({ className, ...props }: TableProps) => (
  <AriaTable
    className={composeRenderProps(className, (className) =>
      cn("w-full caption-bottom text-sm", className)
    )}
    {...props}
  />
)

const TableHeader = <T extends object>({
  className,
  ...props
}: TableHeaderProps<T>) => (
  <AriaTableHeader
    className={composeRenderProps(className, (className) =>
      cn("[&_tr]:border-b", className)
    )}
    {...props}
  />
)

export interface ColumnProps extends AriaColumnProps {
  isResizable?: boolean
}

const Column = ({ className, children, ...props }: ColumnProps) => (
  <AriaColumn
    className={composeRenderProps(className, (className) =>
      cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, { allowsSorting }) => (
      <div className="flex items-center">
        <Group
          role="presentation"
          tabIndex={-1}
          className={cn(
            "flex h-9 flex-1 items-center gap-1 overflow-hidden ",
            allowsSorting &&
              "rounded-md p-2 px-4 data-[hovered]:bg-accent data-[hovered]:text-accent-foreground"
          )}
        >
          <span className="truncate">{children}</span>
          {allowsSorting && <CaretSortIcon className="ml-2 size-4" />}
        </Group>
        {props.isResizable && (
          <ColumnResizer className="box-content h-5 w-px translate-x-[8px] cursor-col-resize rounded bg-muted-foreground bg-clip-content px-[8px] py-1 -outline-offset-2 data-[resizing]:w-[2px] data-[resizing]:bg-primary data-[resizing]:pl-[7px]" />
        )}
      </div>
    ))}
  </AriaColumn>
)

const TableBody = <T extends object>({
  className,
  ...props
}: TableBodyProps<T>) => (
  <AriaTableBody
    className={composeRenderProps(className, (className) =>
      cn("[&_tr:last-child]:border-0", className)
    )}
    {...props}
  />
)

const Row = <T extends object>({ className, ...props }: RowProps<T>) => (
  <AriaRow
    className={composeRenderProps(className, (className) =>
      cn(
        "border-b transition-colors data-[hovered]:bg-muted/50 data-[selected]:bg-muted",
        className
      )
    )}
    {...props}
  />
)

const Cell = ({ className, ...props }: CellProps) => (
  <AriaCell
    className={composeRenderProps(className, (className) =>
      cn(
        "p-2 align-middle [&:has([slot=selection])]:pr-0 [&>[slot=selection]]:translate-y-[2px]",
        className
      )
    )}
    {...props}
  />
)

export {
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
  ResizableTableContainer,
}
