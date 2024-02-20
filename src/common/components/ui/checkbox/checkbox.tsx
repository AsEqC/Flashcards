import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckIcon } from '@/assets'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { Typography } from '../typography'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const { className, disabled, id, label, ...restProps } = props

    return (
      <div className={`${s.checkBox} ${className}`}>
        <label className={s.checkBoxWrapper}>
          <RadixCheckbox.Root className={s.CheckboxRoot} ref={ref} {...restProps}>
            <RadixCheckbox.Indicator aria-disabled={disabled} className={s.CheckboxIndicator}>
              <CheckIcon />
            </RadixCheckbox.Indicator>
          </RadixCheckbox.Root>
        </label>
        <Typography as={'label'} className={s.label} htmlFor={id} variant={'body2'}>
          {label}
        </Typography>
      </div>
    )
  }
)
