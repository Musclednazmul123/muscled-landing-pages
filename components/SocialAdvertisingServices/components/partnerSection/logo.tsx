import React, { FC } from 'react'
import { logoProps } from '../component.type'
import Image from 'next/image'

const Logo: FC<logoProps> = ({ src, className }) => {
  return (
    <Image
      src={src}
      className={`${className ? ` ${className}` : ''}`}
      width={154}
      height={34}
    />
  )
}

export default Logo
