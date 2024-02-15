import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './slider.module.scss'

export type SliderProps = {
  variant?: string
} & ComponentPropsWithoutRef<'div'>

export const Slider = (props: SliderProps) => {
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
