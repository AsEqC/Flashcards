import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export type CardProps = {
  classNameWrapper?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ children, className, classNameWrapper }: CardProps) => {
  const classNames = {
    cardItems: clsx(s.cardItems, className),
    cardWrapper: clsx(s.cardWrapper, classNameWrapper),
  }

  return (
    <div className={classNames.cardWrapper}>
      <div className={classNames.cardItems}>{children}</div>
    </div>
  )
}
