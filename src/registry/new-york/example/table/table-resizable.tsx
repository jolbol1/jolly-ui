import { Checkbox } from "@/registry/new-york/ui/checkbox"
import {
  Cell,
  Column,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "@/registry/new-york/ui/table"

export default function TableResizable() {
  return (
    <ResizableTableContainer className="relative w-full overflow-auto rounded-md border">
      <Table aria-label="Files" selectionMode="multiple">
        <TableHeader>
          <Column width={40} minWidth={40}>
            <Checkbox slot="selection" />
          </Column>
          <Column isResizable isRowHeader>
            Name
          </Column>
          <Column isResizable>Type</Column>
          <Column>Date Modified</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <Checkbox slot="selection" />
            </Cell>
            <Cell>Games</Cell>
            <Cell>File folder</Cell>
            <Cell>6/7/2020</Cell>
          </Row>
          <Row>
            <Cell>
              <Checkbox slot="selection" />
            </Cell>
            <Cell>Program Files</Cell>
            <Cell>File folder</Cell>
            <Cell>4/7/2021</Cell>
          </Row>
          <Row>
            <Cell>
              <Checkbox slot="selection" />
            </Cell>
            <Cell>bootmgr</Cell>
            <Cell>System file</Cell>
            <Cell>11/20/2010</Cell>
          </Row>
          <Row>
            <Cell>
              <Checkbox slot="selection" />
            </Cell>
            <Cell>log.txt</Cell>
            <Cell>Text Document</Cell>
            <Cell>1/18/2016</Cell>
          </Row>
        </TableBody>
      </Table>
    </ResizableTableContainer>
  )
}
