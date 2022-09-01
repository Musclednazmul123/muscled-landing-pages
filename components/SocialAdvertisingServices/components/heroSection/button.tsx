import React, { FC } from 'react'
import { HeroButton } from '../component.type'

const Button: FC<HeroButton> = ({
  text,
  textColor,
  backgroundColor,
  className
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-md ${className ? ` ${className}` : ''} ${
        textColor ? ` text-${textColor}` : 'text-white'
      } ${backgroundColor ? backgroundColor : 'bg-black'}`}
    >
      {text}
    </button>
  )
}

export default Button
