import React, { FC } from 'react'
import { HeroInput } from '../component.type'

const Input: FC<HeroInput> = ({ type, placeholder, className }) => {
  return (
    <div
      className={`border-neutral-700 flex rounded-md bg-white px-4 py-2 ${
        className ? className : ''
      }`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="border-none focus:border-none text-black outline-none"
      />
    </div>
  )
}

export default Input
