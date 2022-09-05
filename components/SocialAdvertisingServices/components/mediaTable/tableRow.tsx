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
  return (
    <tr
      className={`${className ? className : ''} ${
        isHead ? 'font-bold' : 'font-light'
      } text-center border-b border-neutral-500 text-[16px]`}
    >
      <td className="px-4 py-8 bg-black-80 text-left text-white min-w-[310px] min-h-[84px]">
        {feature}
      </td>
      <Value featureValue={aggressive} type="aggressive" />
      <Value featureValue={marketLeader} type="marketLeader" />
      <Value featureValue={enterprise} type="enterprise" />
    </tr>
  )
}
export default TableRow
