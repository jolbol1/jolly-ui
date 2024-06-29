"use client"

import { ChevronsUpDown } from "lucide-react"
import { Form, Text } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxCollection,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from "@/registry/default/ui/combobox"
import { FieldError } from "@/registry/default/ui/field"
import { Label } from "@/registry/default/ui/label"
import { FieldGroup } from "@/registry/new-york/ui/field"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <ComboboxDemo />
      <ComboboxContent />
      <ComboboxLinks />
      <ComoboxSections />
      <ComboboxSectionsDynamic />
      <ComboboxTextSlot />
      <ComboboxMenuTrigger />
      <ComboboxDisabledItems />
      <ComboboxDisabled />
      <ComboboxValidation />
      <ComboboxDescription />
    </div>
  )
}

function ComboboxDemo() {
  return (
    <Combobox>
      <Label>Favorite Animal</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
          <ComboboxItem textValue="Cat">Cat</ComboboxItem>
          <ComboboxItem textValue="Dog">Dog</ComboboxItem>
          <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem textValue="Panda">Panda</ComboboxItem>
          <ComboboxItem textValue="Snake">Snake</ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComboboxContent() {
  let options = [
    { id: 1, name: "Aerospace" },
    { id: 2, name: "Mechanical" },
    { id: 3, name: "Civil" },
    { id: 4, name: "Biomedical" },
    { id: 5, name: "Nuclear" },
    { id: 6, name: "Industrial" },
    { id: 7, name: "Chemical" },
    { id: 8, name: "Agricultural" },
    { id: 9, name: "Electrical" },
  ]

  return (
    <Combobox defaultItems={options}>
      <Label>Major</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox<(typeof options)[number]>>
          {(item) => <ComboboxItem>{item.name}</ComboboxItem>}
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComboboxLinks() {
  return (
    <Combobox>
      <Label>Tech company websites</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem href="https://adobe.com/" target="_blank">
            Adobe
          </ComboboxItem>
          <ComboboxItem href="https://apple.com/" target="_blank">
            Apple
          </ComboboxItem>
          <ComboboxItem href="https://google.com/" target="_blank">
            Google
          </ComboboxItem>
          <ComboboxItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComoboxSections() {
  return (
    <Combobox>
      <Label>Preferred fruit or vegetable</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxSection>
            <ComboboxHeader>Fruit</ComboboxHeader>
            <ComboboxItem id="Apple">Apple</ComboboxItem>
            <ComboboxItem id="Banana">Banana</ComboboxItem>
            <ComboboxItem id="Orange">Orange</ComboboxItem>
            <ComboboxItem id="Honeydew">Honeydew</ComboboxItem>
            <ComboboxItem id="Grapes">Grapes</ComboboxItem>
            <ComboboxItem id="Watermelon">Watermelon</ComboboxItem>
            <ComboboxItem id="Cantaloupe">Cantaloupe</ComboboxItem>
            <ComboboxItem id="Pear">Pear</ComboboxItem>
          </ComboboxSection>
          <ComboboxSection>
            <ComboboxHeader>Vegetable</ComboboxHeader>
            <ComboboxItem id="Cabbage">Cabbage</ComboboxItem>
            <ComboboxItem id="Broccoli">Broccoli</ComboboxItem>
            <ComboboxItem id="Carrots">Carrots</ComboboxItem>
            <ComboboxItem id="Lettuce">Lettuce</ComboboxItem>
            <ComboboxItem id="Spinach">Spinach</ComboboxItem>
            <ComboboxItem id="Bok Choy">Bok Choy</ComboboxItem>
            <ComboboxItem id="Cauliflower">Cauliflower</ComboboxItem>
            <ComboboxItem id="Potatoes">Potatoes</ComboboxItem>
          </ComboboxSection>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComboboxSectionsDynamic() {
  let options = [
    {
      name: "Fruit",
      children: [
        { name: "Apple" },
        { name: "Banana" },
        { name: "Orange" },
        { name: "Honeydew" },
        { name: "Grapes" },
        { name: "Watermelon" },
        { name: "Cantaloupe" },
        { name: "Pear" },
      ],
    },
    {
      name: "Vegetable",
      children: [
        { name: "Cabbage" },
        { name: "Broccoli" },
        { name: "Carrots" },
        { name: "Lettuce" },
        { name: "Spinach" },
        { name: "Bok Choy" },
        { name: "Cauliflower" },
        { name: "Potatoes" },
      ],
    },
  ]
  return (
    <Combobox defaultItems={options}>
      <Label>Preferred fruit or vegetable</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox<(typeof options)[number]>>
          {(section) => (
            <ComboboxSection id={section.name}>
              <ComboboxHeader>{section.name}</ComboboxHeader>
              <ComboboxCollection items={section.children}>
                {(item) => (
                  <ComboboxItem id={item.name}>{item.name}</ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxSection>
          )}
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComboboxTextSlot() {
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

function ComboboxMenuTrigger() {
  return (
    <div className="flex gap-6 flex-col">
      <Combobox menuTrigger="input">
        <Label>Favorite Animal (Input)</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Combobox menuTrigger="focus">
        <Label>Favorite Animal (Focus)</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Combobox menuTrigger="manual">
        <Label>Favorite Animal (Manual)</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

function ComboboxDisabled() {
  return (
    <Combobox isDisabled>
      <Label>Favorite Animal</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
          <ComboboxItem textValue="Cat">Cat</ComboboxItem>
          <ComboboxItem textValue="Dog">Dog</ComboboxItem>
          <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem textValue="Panda">Panda</ComboboxItem>
          <ComboboxItem textValue="Snake">Snake</ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComboboxDisabledItems() {
  return (
    <Combobox disabledKeys={["cat", "kangaroo"]}>
      <Label>Favorite Animal</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem id="red panda">Red Panda</ComboboxItem>
          <ComboboxItem id="cat">Cat</ComboboxItem>
          <ComboboxItem id="dog">Dog</ComboboxItem>
          <ComboboxItem id="aardvark">Aardvark</ComboboxItem>
          <ComboboxItem id="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem id="snake">Snake</ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}

function ComboboxValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <Combobox name="animal" isRequired>
        <Label>Favorite Animal</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <FieldError />
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem id="red panda">Red Panda</ComboboxItem>
            <ComboboxItem id="cat">Cat</ComboboxItem>
            <ComboboxItem id="dog">Dog</ComboboxItem>
            <ComboboxItem id="aardvark">Aardvark</ComboboxItem>
            <ComboboxItem id="kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem id="snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}

function ComboboxDescription() {
  return (
    <Combobox name="animal" isRequired>
      <Label>Favorite Animal</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
        </Button>
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select an animal.
      </Text>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem id="red panda">Red Panda</ComboboxItem>
          <ComboboxItem id="cat">Cat</ComboboxItem>
          <ComboboxItem id="dog">Dog</ComboboxItem>
          <ComboboxItem id="aardvark">Aardvark</ComboboxItem>
          <ComboboxItem id="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem id="snake">Snake</ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
