import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Card.module.scss'

export type CardProps = {
  variant?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = (props: CardProps) => {
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
