import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const ToggleInput: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
  },
}

export const SearchInput: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'input search',
    placeholder: 'input search',
    type: 'search',
  },
}
