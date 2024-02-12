import { ComponentPropsWithoutRef, useState } from 'react'

import { ClosedEyeIcon, OpenEyeIcon, SearchIcon } from '@/assets'
import { Typography } from '@/components/ui/Typography'
import clsx from 'clsx'

import s from './Input.module.scss'

export type InputProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { className, disabled, error, label, type, ...res } = props

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const inputClassName = clsx(s.input, type === 'search' && s.search, error && s.error)

  const currentType = getInputType(type, showPassword)

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
        <input className={inputClassName} disabled={disabled} type={currentType} {...res} />
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
