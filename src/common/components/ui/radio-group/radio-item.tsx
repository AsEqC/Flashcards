import { ComponentPropsWithoutRef, useId } from 'react'

import { Typography } from '@/common/components/ui/typography'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioItemProps = ComponentPropsWithoutRef<typeof RadixRadioGroup.Item>

export const RadioItem = (props: RadioItemProps) => {
  const { children, id, value } = props
  const generatedId = useId()

  return (
    <div className={s.radioItemBlock}>
      <RadixRadioGroup.Item className={s.radioGroupItem} id={id ?? generatedId} value={value}>
        <RadixRadioGroup.Indicator className={s.radioGroupIndicator} />
      </RadixRadioGroup.Item>
      <Typography as={'label'} className={s.label} htmlFor={id ?? generatedId} variant={'body2'}>
        {children}
      </Typography>
    </div>
  )
}
