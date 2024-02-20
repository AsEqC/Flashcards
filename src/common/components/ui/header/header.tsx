import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './header.module.scss'

export type HeaderProps = {
  variant?: string
} & ComponentPropsWithoutRef<'div'>

export const Header = (props: HeaderProps) => {
  const { children, className, variant, ...restProps } = props
  const classname = {
    card: clsx(s.card, className),
  }

  return (
    <div className={classname.card} {...restProps}>
      {children}
    </div>
  )
}
