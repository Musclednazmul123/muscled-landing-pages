import React, { FC } from 'react'
import { HeroButton } from '../component.type'
import Link from 'next/link'

const Button: FC<HeroButton> = ({
  text,
  textColor,
  backgroundColor,
  className
}) => {
  return (
    <button
      className={`py-2 rounded-[5px] transform transition-all ease-in-out active:scale-90 focus:outline-none  text-[20px]${
        className ? ` ${className}` : ''
      } ${textColor ? ` text-${textColor}` : 'text-white'} ${
        backgroundColor ? backgroundColor : 'bg-black'
      }`}
    >
      {text}
    </button>
  )
}

export default Button
