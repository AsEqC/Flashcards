import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@/services/store'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'

import { SignIn } from './sign-in'

const meta = {
  component: SignIn,
  decorators: [
    Story => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SignInDefault: Story = {}

export const SignInProgress: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailElement = canvas.getByLabelText('Email')

    await userEvent.type(emailElement, 'user@gmail.com', {
      delay: 100,
    })

    const passwordElement = canvas.getByLabelText('Password')

    await userEvent.type(passwordElement, '123456789', {
      delay: 100,
    })

    const checkBoxElement = canvas.getByLabelText('Remember me')

    await userEvent.click(checkBoxElement, { delay: 100 })

    const buttonElement = canvas.getByRole('button', { name: 'Sign In' })

    await userEvent.click(buttonElement, {
      delay: 200,
    })
  },
}

export const SignInError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailElement = canvas.getByLabelText('Email')

    await userEvent.type(emailElement, 'usermail.com', {
      delay: 100,
    })

    const password = canvas.getByLabelText('Password')

    await userEvent.type(password, '12', {
      delay: 100,
    })
    const checkBoxElement = canvas.getByLabelText('Remember me')

    await userEvent.click(checkBoxElement, { delay: 100 })

    const buttonElement = canvas.getByRole('button', { name: 'Sign In' })

    await userEvent.click(buttonElement, {
      delay: 200,
    })
  },
}
