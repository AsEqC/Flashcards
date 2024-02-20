import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  as?: T
  textColor?: 'dark' | 'light'
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
  const {
    as: Component = 'div',
    className,
    textColor = 'light',
    variant = 'h1',
    ...restProps
  } = props

  return <Component className={`${s[variant]} ${s[textColor]} ${className}`} {...restProps} />
}
