import { ChevronsUpDown } from "lucide-react"
import { Text } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/default/ui/combobox"
import { FieldGroup } from "@/registry/default/ui/field"
import { Label } from "@/registry/default/ui/label"

export default function ComboboxTextSlot() {
  return (
    <Combobox>
      <Label>Select action</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem
            textValue="Add to queue"
            className="flex flex-col items-start"
          >
            <Text slot="label">Add to queue</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Add to current watch queue.
            </Text>
          </ComboboxItem>
          <ComboboxItem
            textValue="Add review"
            className="flex flex-col items-start"
          >
            <Text slot="label">Add review</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Post a review for the episode.
            </Text>
          </ComboboxItem>
          <ComboboxItem
            textValue="Report"
            className="flex flex-col items-start"
          >
            <Text slot="label">Report</Text>
            <Text className="text-sm text-muted-foreground" slot="description">
              Report an issue/violation.
            </Text>
          </ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
