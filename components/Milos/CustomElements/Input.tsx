import React, { FC } from 'react'
import { InputProps } from '../component.type'

const Input: FC<InputProps> = ({label, placeholder, className}) => {
  return (
    <div className={`${className ? className : ''}`}>
      <label className="block text-[#fff] text-[36px] font-bold mb-[39px]">
        {label}
      </label>
      <input className="w-[368px] h-[87px] appearance-none border rounded-[5px] w-full py-[20px] px-[10px] text-gray-700 text-[36px]" id="username" type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
