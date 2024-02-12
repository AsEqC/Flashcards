import { ComponentPropsWithoutRef, ElementType } from 'react'

import { LogoutIcon } from '@/assets'
import clsx from 'clsx'

import s from './Button.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  icon: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled,
    fullWidth,
    icon,
    onClick,
    variant = 'primary',
    ...restProps
  } = props
  const classname = {
    button: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
  }

  return (
    <Component className={classname.button} disabled={disabled} onClick={onClick} {...restProps}>
      {icon && LogoutIcon} {children}
    </Component>
  )
}
