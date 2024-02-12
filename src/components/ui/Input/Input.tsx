import { ComponentPropsWithoutRef, useState } from 'react'

// import { ClosedEyeIcon, OpenEyeIcon } from '@/assets'
import clsx from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { className, error, label, type } = props

  const [isVisiblePassword, setIsVisiblePassword] = useState(false)

  const inputType = type === 'password' && isVisiblePassword ? 'text' : type
  const setIsVisiblePasswordHandler = () => setIsVisiblePassword(prevState => !prevState)

  return (
    <div className={s.wrapper}>
      <input className={clsx(className)} />
    </div>
  )
}
