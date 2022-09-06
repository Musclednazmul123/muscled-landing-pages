import React, { FC, useState } from 'react'
import styles from './styles.module.css'
import { panel } from '../../component.type'

const Panel: FC<panel> = ({ heading, description, index }) => {
  const [open, setOpen] = useState(false)
  const togglePanel = (id: number | undefined) => {
    setOpen(!open)
    const svg: string = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 plusminus"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
        />
      </svg>
    )

    // const icon = document.getElementById(`expand-${id}`)
    document.getElementById(`panel-${id}`)?.classList.toggle('hidden')
    document.getElementById(`heading-${id}`)?.classList.toggle('rounded-b-xl')
    document
      .getElementById(`expand-${id}`)
      ?.classList.toggle(`${styles.active}`)

    let target = document.getElementById(`expand-${id}`)
    // target ? (target.innerHTML = svg) : ''
  }
  return (
    <div className="rounded-xl w-full">
      <input type="checkbox" name="panel" className="hidden" />
      <label
        className="relative rounded-t-xl bg-white p-4 border-grey flex justify-between rounded-b-xl font-bold text-black-70 text-[20px]"
        id={`heading-${index ? index : ''}`}
      >
        {heading}
        <div
          id={`expand-${index ? index : ''}`}
          onClick={(e) => {
            togglePanel(index)
          }}
          className={'' + styles.plusminu}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}

          {/* <div className="plusminus" id={`icon-${index ? index : ''}`}></div> */}
        </div>
      </label>
      <div
        className="accordion__content overflow-hidden bg-white rounded-b-xl hidden"
        id={`panel-${index ? index : ''}`}
      >
        <p className="accordion__body p-4 text-[20px]">{description}</p>
      </div>
    </div>
  )
}
export default Panel
