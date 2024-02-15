import * as ToggleGroup from '@radix-ui/react-toggle-group'
import clsx from 'clsx'

import s from './tab-switcher.module.scss'

export type TabSwitcherProps = {
  active?: number
  disabled?: boolean
  // onValueChanged: (currActive: number) => {}
  tabs: string[]
}

export const TabSwitcher = (props: TabSwitcherProps) => {
  const { active, disabled = false, tabs } = props
  const mappedTabs = (tabs: string[]) => {
    return tabs.map((tab, i) => {
      return (
        <ToggleGroup.Item
          className={clsx(
            disabled && s.tabDisabled,
            s.buttonTab,
            active === i ? s.tabActive : s.ToggleGroupItem
          )}
          key={i}
          value={`${i}`}
        >
          {tab}
        </ToggleGroup.Item>
      )
    })
  }

  return (
    <ToggleGroup.Root disabled={disabled} type={'single'} value={`${active}`}>
      {mappedTabs(tabs)}
    </ToggleGroup.Root>
  )
}
