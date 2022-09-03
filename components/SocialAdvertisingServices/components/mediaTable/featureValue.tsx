import React, { FC, ReactNode } from 'react'
import { feature } from '../component.type'

const Value: FC<feature> = (
  firstTableData: string,
  secondTableData: boolean
) => {
  const displayValue = (data: string | boolean) => {
    if (typeof data === 'string') {
      if (data === 'true') {
        return (
          <td className="px-4 py-8 bg-red-3 w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-green-500 m-auto"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              />
            </svg>
          </td>
        )
      } else {
        return <td className="px-4 py-8 bg-red-3 w-1/4">{data}</td>
      }
    } else if (typeof data === 'boolean') {
      if (data === true) {
        return <td className="px-4 py-8 bg-red-3 w-1/4">Yes</td>
      } else {
        return <td className="px-4 py-8 bg-red-3 w-1/4">No</td>
      }
    }
  }
  return displayValue(featureValue)
}
export default Value
