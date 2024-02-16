import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = (props: CardProps) => {
  const { children, className, ...restProps } = props
  const classname = {
    card: clsx(s.card, className),
  }

  return (
    <div className={classname.card} {...restProps}>
      {children}
    </div>
  )
}
