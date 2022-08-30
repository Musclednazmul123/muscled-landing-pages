import React, { FC } from 'react'
import { SectionProps } from '../component.type'

const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <div className={`max-w-1440 mx-auto px-3 relative ${className ? className : ''}`}>
        { children }
    </div>
  )
}

export default Section