import React, { FC } from 'react'
import { tableRow } from '../component.type'
// import Tick from '../../../assets/SocialAdvertisingServices/mediaTable/Vector.png'
// import Image from 'next/image'
import Value from './featureValue'
const TableRow: FC<tableRow> = ({
  feature,
  aggressive,
  marketLeader,
  enterprise,
  isHead,
  className
}) => {
  const featureValue = (feature: string) => {
    if (feature === 'true') {
      return (
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
      )
    } else {
      return feature
    }
  }
  return (
    <tr
      className={`${className ? className : ''} ${
        isHead ? 'font-bold' : 'font-light'
      } text-center border-b border-neutral-500 text-[16px]`}
    >
      <td className="px-4 py-8 bg-black-80 text-left text-white w-1/4">
        {feature}
      </td>
      <td className="px-4 py-8 bg-red-3 w-1/4">{featureValue(aggressive)}</td>
      <td className="px-4 py-8 bg-red-6 w-1/4">{featureValue(marketLeader)}</td>
      <td className="px-4 py-8 bg-red-9 w-1/4">{featureValue(enterprise)}</td>
    </tr>
  )
}
export default TableRow
