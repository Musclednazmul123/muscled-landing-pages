import React, { FC } from 'react'
import { InputButtonProps } from '../component.type'

const Button: FC<InputButtonProps> = ({ text, icon, textColor, backgroundColor, boxShadow, className, rounded}) => {
  return (
    <>
      <button type="button"
			  className={`${
					className ? className : ""
				} ${rounded ? rounded : "rounded-[5px]"} 
					text-${textColor} bg-${backgroundColor} ${boxShadow}
				  gap-x-[11px] flex justify-center items-center text-md py-4 text-semibold px-5 active:scale-[95%]`}>
        {text}
        {icon}
      </button>
    </>
  )
}

export default Button
