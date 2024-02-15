import { ComponentPropsWithoutRef, ElementType } from 'react'

import { LogoutIcon } from '@/assets'
import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  icon?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon = false,
    variant = 'primary',
    ...restProps
  } = props
  const classname = {
    button: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
  }

  return (
    <Component className={classname.button} {...restProps}>
      <span className={s.span}>
        {icon && <LogoutIcon size={1.3} />} {children}
      </span>
    </Component>
  )
}
