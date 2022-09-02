import React from 'react'
import styles from './styles.module.css'

const Panel = ({ heading, description }) => {
  return (
    <div className="w-full">
      <input type="checkbox" name="panel" id="panel-1" className="hidden" />
      <label className="relative block bg-white p-4 shadow border-b border-grey">
        {heading}
      </label>
      <div className="accordion__content overflow-hidden bg-white">
        <p className="accordion__body p-4" id="panel1">
          {description}
        </p>
      </div>
    </div>
  )
}
export default Panel
