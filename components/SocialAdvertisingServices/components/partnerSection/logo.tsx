import React, { FC } from 'react'
import { logoProps } from '../component.type'
import Image from 'next/image'

const Logo: FC<logoProps> = ({ src, className }) => {
  return (
    <div className={`${className ? ` ${className}` : ''}`}>
      <Image src={src} width={154} height={34} />
    </div>
  )
}

export default Logo
