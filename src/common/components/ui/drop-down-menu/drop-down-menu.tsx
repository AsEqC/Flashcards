import { ComponentPropsWithoutRef } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

export type CardProps = ComponentPropsWithoutRef<typeof RadixDropdownMenu.Root>

export const DropDownMenu = () => {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger></RadixDropdownMenu.Trigger>
    </RadixDropdownMenu.Root>
  )
}
