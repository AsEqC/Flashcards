import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadixTabs from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabType = {
  disabled?: boolean
  title?: string
  value?: string
}

export type TabSwitcherProps = {
  label?: string
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof RadixTabs.Root>

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { label, tabs, ...restProps } = props
  const mappedTabs = (tabs: TabType[]) => {
    return tabs.map(tab => {
      const { disabled, title, value } = tab

      return (
        <RadixTabs.Trigger
          className={s.tabsTrigger}
          disabled={disabled}
          key={value}
          value={`${value}`}
        >
          <Typography className={s.tabsTitle} variant={'body1'}>
            {title}
          </Typography>
        </RadixTabs.Trigger>
      )
    })
  }

  return (
    <RadixTabs.Root className={s.tabsRoot} {...restProps}>
      <Typography variant={'body2'}>{label}</Typography>
      <RadixTabs.List aria-label={'Manage your account'} className={s.tabsList}>
        {mappedTabs(tabs)}
      </RadixTabs.List>
    </RadixTabs.Root>
  )
}
