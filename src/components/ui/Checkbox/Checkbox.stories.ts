import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/Checkbox/Checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Remember Me',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Remember Me',
  },
}
