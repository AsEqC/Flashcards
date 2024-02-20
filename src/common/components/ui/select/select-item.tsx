import React, { ComponentPropsWithoutRef, ElementRef } from 'react'

import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type ItemProps = ComponentPropsWithoutRef<typeof RadixSelect.Item>
export const SelectTextItem = React.forwardRef<ElementRef<typeof RadixSelect.Item>, ItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RadixSelect.Item {...props} className={s.selectItem}>
        <RadixSelect.ItemText ref={ref}>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)

export const SelectItem = React.forwardRef<ElementRef<typeof RadixSelect.Item>, ItemProps>(
  ({ children, className, ...props }, ref) => {
    const classname = {
      selectItem: clsx(s.selectItem, className),
    }

    return (
      <RadixSelect.Item {...props} className={classname.selectItem} ref={ref}>
        {children}
      </RadixSelect.Item>
    )
  }
)
