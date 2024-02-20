import { ComponentPropsWithoutRef } from 'react'

import { ArrowDownIcon } from '@/assets'
import { Typography } from '@/common/components/ui/typography'
import * as RadixSelect from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

export type SelectProps = {
  className?: string
  label?: string
  placeholder?: string
  variant?: 'pagination' | 'primary'
} & ComponentPropsWithoutRef<typeof RadixSelect.Root>

export const Select = (props: SelectProps) => {
  const {
    children,
    className,
    disabled,
    label,
    placeholder,
    variant = 'primary',
    ...restProps
  } = props
  const classname = {
    selectGroup: clsx(s.selectGroup, variant === 'pagination' && s.paginationSelectItem),
    selectLabel: clsx(s.selectLabel, disabled && s.selectLabelDisabled),
    selectTrigger: clsx(s.selectTrigger, variant === 'pagination' && s.paginationSelect, className),
  }

  return (
    <div className={s.selectWrapper}>
      <Typography as={'label'} className={classname.selectLabel} variant={'body2'}>
        {label}
      </Typography>
      <RadixSelect.Root disabled={disabled} {...restProps}>
        <RadixSelect.Trigger className={classname.selectTrigger}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon asChild>
            <ArrowDownIcon className={s.arrow} size={1.3} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            align={'start'}
            className={s.selectContent}
            position={'popper'}
            side={'bottom'}
          >
            <RadixSelect.Viewport>
              <RadixSelect.Group className={classname.selectGroup}>{children}</RadixSelect.Group>
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  )
}
