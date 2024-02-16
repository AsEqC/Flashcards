import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tab-switcher.module.scss'

type TabType = {
  className?: string
  disabled?: boolean
  title?: string
  value?: string
}

export type TabSwitcherProps = {
  label?: string
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof TabsRadix.Root>

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { label, tabs, ...restProps } = props
  const mappedTabs = (tabs: TabType[]) => {
    return tabs.map((tab, i) => {
      const { disabled, title, value } = tab

      return (
        <TabsRadix.Trigger className={s.tabsTrigger} disabled={disabled} key={i} value={`${value}`}>
          <Typography className={s.tabsTitle} variant={'body1'}>
            {title}
          </Typography>
        </TabsRadix.Trigger>
      )
    })
  }

  return (
    <TabsRadix.Root className={s.tabsRoot} {...restProps}>
      <Typography variant={'body2'}>{label}</Typography>
      <TabsRadix.List aria-label={'Manage your account'} className={s.tabsList}>
        {mappedTabs(tabs)}
      </TabsRadix.List>
    </TabsRadix.Root>
  )
}
