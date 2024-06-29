"use client"

import { Form, Text } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { Checkbox, CheckboxGroup } from "@/registry/default/ui/checkbox"
import { FieldError, Label } from "@/registry/default/ui/field"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <CheckboxGroupDemo />
      <CheckboxGroupValidation />
      <CheckboxGroupIndividualValidation />
      <CheckboxGroupDescription />
      <CheckboxGroupDisabled />
      <CheckboxGroupDisabledIndividual />
      <CheckboxGroupReadonly />
    </div>
  )
}

function CheckboxGroupDemo() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}

function CheckboxGroupValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <CheckboxGroup name="condiments" isRequired className="space-y-1">
        <Label>Sandwich condiments</Label>
        <Checkbox value="lettuce">Lettuce</Checkbox>
        <Checkbox value="tomato">Tomato</Checkbox>
        <Checkbox value="onion">Onion</Checkbox>
        <Checkbox value="sprouts">Sprouts</Checkbox>
        <FieldError />
      </CheckboxGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}

function CheckboxGroupIndividualValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <CheckboxGroup className="space-y-1">
        <Label>Agree to the following</Label>
        <Checkbox value="terms" isRequired>
          Terms and conditions
        </Checkbox>
        <Checkbox value="privacy" isRequired>
          Privacy policy
        </Checkbox>
        <Checkbox value="cookies" isRequired>
          Cookie policy
        </Checkbox>
        <FieldError />
      </CheckboxGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}

function CheckboxGroupDescription() {
  return (
    <CheckboxGroup>
      <Label>Pets</Label>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
      <Text className="text-sm text-muted-foreground" slot="description">
        Select your pets.
      </Text>
    </CheckboxGroup>
  )
}

function CheckboxGroupDisabled() {
  return (
    <CheckboxGroup isDisabled>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}

function CheckboxGroupDisabledIndividual() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox isDisabled value="baseball">
        Baseball
      </Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}

function CheckboxGroupReadonly() {
  return (
    <CheckboxGroup defaultValue={["baseball"]} isReadOnly>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}
