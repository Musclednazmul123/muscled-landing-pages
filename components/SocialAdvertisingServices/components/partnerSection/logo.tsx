import React, { FC } from 'react'
import { logoProps } from '../component.type'
import Image from 'next/image'

const Logo: FC<logoProps> = ({ src, className, width, height }) => {
  return (
    <div className={`${className ? ` ${className}` : ''}`}>
      <Image
        src={src}
        width={width ? width : 154}
        height={height ? height : 34}
      />
    </div>
  )
}

export default Logo
