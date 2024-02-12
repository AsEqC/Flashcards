import { Card } from '@/components/ui/Card/Card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    variant: {
      options: ['defaultCard'],
    },
  },
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDefaultStory: Story = {
  args: {
    children: 'card',
    variant: 'defaultCard',
  },
}
