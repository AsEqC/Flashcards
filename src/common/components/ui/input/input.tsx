import React, { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import { ClosedEyeIcon, OpenEyeIcon, SearchIcon } from '@/assets'
import clsx from 'clsx'

import s from './input.module.scss'

import { Typography } from '../typography'

export type InputProps = {
  error?: string
  label?: string
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { className, disabled, error, label, onChange, onValueChange, type, ...res } = props

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const inputClassName = clsx(s.input, type === 'search' && s.search, error && s.error)

  const currentType = getInputType(type, showPassword)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }
  const handleIconButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPassword(prevState => !prevState)
  }

  return (
    <div className={clsx(s.inputBlock, className)}>
      <Typography as={'span'} className={s.label} variant={'body2'}>
        {type === 'search' ? '' : label}
      </Typography>

      <label className={s.root}>
        {type === 'password' && (
          <button
            className={s.eyeButton}
            disabled={disabled}
            onClick={e => handleIconButtonClick(e)}
            tabIndex={-1}
            type={'button'}
          >
            {' '}
            {showPassword ? (
              <OpenEyeIcon className={s.close} />
            ) : (
              <ClosedEyeIcon className={s.close} disabled={disabled} />
            )}
          </button>
        )}
        {type === 'search' && <SearchIcon />}
        <input
          className={inputClassName}
          disabled={disabled}
          onChange={onChangeHandler}
          type={currentType}
          {...res}
        />
      </label>
      <Typography as={'span'} className={s.labelError} variant={'caption'}>
        {error}
      </Typography>
    </div>
  )
}

const getInputType = (type: ComponentPropsWithoutRef<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && !showPassword) {
    return 'password'
  }
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
