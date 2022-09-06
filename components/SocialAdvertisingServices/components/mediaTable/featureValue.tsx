import React, { FC, ReactNode } from 'react'
import { feature } from '../component.type'

const Value: FC<feature> = ({ featureValue, type }) => {
  const setBg = (type: string) => {
    switch (type) {
      case 'aggressive': {
        return 'bg-red-3'
        break
      }
      case 'marketLeader': {
        return 'bg-red-6'
        break
      }
      case 'enterprise': {
        return 'bg-red-9'
        break
      }
      case 'pixel': {
        return 'bg-red-6'
        break
      }
      case 'catalogs': {
        return 'bg-red-9'
        break
      }
      default: {
        return 'bg-red-3'
        break
      }
    }
  }

  const displayValue = (data: string | boolean, type: string) => {
    if (typeof data === 'string') {
      if (data === 'true') {
        return (
          <td className={`px-4 py-8  w-1/4 ${setBg(type)}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-green-500 m-auto"
            >
              <path
                fillRule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clipRule="evenodd"
              />
            </svg>
          </td>
        )
      } else {
        return (
          <td className={`px-4 py-8 w-1/4 ${setBg(type)}`}>
            <div className="w-[200px] m-auto leading-6">{data}</div>
          </td>
        )
      }
    } else if (typeof data === 'boolean') {
      if (data === true) {
        return (
          <td className={`px-[20px] py-8 w-1/4 ${setBg(type)}`}>
            <div className="w-[200px] m-auto">Yes</div>
          </td>
        )
      } else {
        return (
          <td className={`px-[20px] py-8 w-1/4 ${setBg(type)}`}>
            <div className="w-[200px] m-auto">No</div>
          </td>
        )
      }
    } else {
      return <td className={`px-4 py-8 w-1/4 bg-red-3}`}></td>
    }
  }
  return displayValue(featureValue, type)
}
export default Value
