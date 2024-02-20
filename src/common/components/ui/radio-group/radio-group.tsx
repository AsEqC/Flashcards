import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadixRadioGroup.Root>, RadioGroupProps>(
  (props: RadioGroupProps, ref) => {
    const { children, ...restProps } = props

    return (
      <RadixRadioGroup.Root className={s.radioGroupRoot} {...restProps}>
        <div ref={ref}>{children}</div>
      </RadixRadioGroup.Root>
    )
  }
)
