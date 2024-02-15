import React from 'react'

import './button.css'

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * typography contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * How large should the typography be?
   */
  size?: 'large' | 'medium' | 'small'
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  backgroundColor,
  label,
  primary = false,
  size = 'medium',
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-typography--primary' : 'storybook-typography--secondary'

  return (
    <button
      className={['storybook-typography', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      type={'button'}
      {...props}
    >
      {label}
    </button>
  )
}
