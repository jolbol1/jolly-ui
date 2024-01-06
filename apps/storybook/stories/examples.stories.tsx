import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { CardsCookieSettings } from "../../docs/components/examples/cookie-settings-demo.jsx"
import { CardsCreateAccount } from "../../docs/components/examples/create-account-demo.jsx"
import { CardDatePicker } from "../../docs/components/examples/datepicker-demo.jsx"
import { CardsPaymentMethod } from "../../docs/components/examples/payment-method-demo.jsx"
import { TabsDemo } from "../../docs/components/examples/tabs-demo.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta = {
  title: "*Examples/Cards",
}

export default meta

type Story = StoryObj

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const PaymentMethod: Story = {
  render: () => <CardsPaymentMethod />,
}

export const CreateAccount: Story = {
  render: () => <CardsCreateAccount />,
}

export const CookieSettings: Story = {
  render: () => <CardsCookieSettings />,
}

export const DatePicker = {
  render: () => <CardDatePicker />,
}

export const Tabs = {
  render: () => <TabsDemo />,
}
