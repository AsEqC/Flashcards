import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './'

const meta = {
  argTypes: {
    tabs: ['Switcher', 'Switcher', 'Switcher', 'Switcher', 'Switcher'],
  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: ['Switcher', 'Switcher', 'Switcher', 'Switcher', 'Switcher'],
  },
}

export const Active: Story = {
  args: {
    tabs: ['Switcher', 'Switcher', 'Switcher', 'Switcher', 'Switcher'],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,

    tabs: ['Switcher', 'Switcher', 'Switcher', 'Switcher', 'Switcher'],
  },
}
