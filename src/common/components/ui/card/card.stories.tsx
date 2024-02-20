import { Card } from '@/common/components/ui/card/card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardDefaultStory: Story = {
  args: {
    children: 'card',
  },
}
