import React, { FC } from 'react'
import { DynamicSectionProps } from '../components/component.type'

const DynamicSection: FC<DynamicSectionProps> = ({ className, children }) => {
  return (
    <div className={`max-w-1240 mx-auto flex ${className ? className : ''}`}>
      {children}
    </div>
  )
}
export default DynamicSection
