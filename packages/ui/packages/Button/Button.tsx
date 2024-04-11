import classNames from 'classnames'
import type { PropsWithChildren } from 'react'
import React from 'react'

export interface ButtonProps {
  className?: string
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  ...props
}) => {
  return <button className={classNames('sk-button', className)} {...props} />
}

export default Button
