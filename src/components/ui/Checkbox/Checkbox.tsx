import { ComponentPropsWithoutRef } from 'react'

import { CheckIcon } from '@/assets'
import { Typography } from '@/components/ui/Typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './Checkbox.module.scss'

export type CheckboxProps = {
  id?: string
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = (props: CheckboxProps) => {
  const { checked, className, disabled, id, label, onChange, required, ...restProps } = props

  return (
    <div className={`${s.checkBox} ${className}`}>
      <label className={s.checkBoxWrapper}>
        <CheckboxRadix.Root
          checked={checked}
          className={s.CheckboxRoot}
          disabled={disabled}
          id={id}
          onChange={onChange}
          required={required}
          {...restProps}
        >
          <CheckboxRadix.Indicator aria-disabled={disabled} className={s.CheckboxIndicator}>
            <CheckIcon />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </label>
      <Typography as={'label'} className={s.label} htmlFor={id} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
