import React, { FC } from 'react'
import { tableRow } from '../component.type'
import Tick from '../../../assets/SocialAdvertisingServices/mediaTable/Vector.png'
import Image from 'next/image'

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
        isHead ? 'font-bold' : ''
      } text-center border-b border-neutral-500`}
    >
      <td className="px-4 py-8 bg-black-80 text-left text-white w-1/4">
        {feature}
      </td>
      <td className="px-4 py-8 bg-red-3 w-1/4">
        {aggressive === 'true' ? (
          <Image src={Tick} alt="tick" width={17} height={13} />
        ) : (
          aggressive
        )}
      </td>
      <td className="px-4 py-8 bg-red-6 w-1/4">
        {marketLeader === 'true' ? (
          <Image src={Tick} alt="tick" width={17} height={13} />
        ) : (
          marketLeader
        )}
      </td>
      <td className="px-4 py-8 bg-red-9 w-1/4">
        {enterprise === 'true' ? (
          <Image src={Tick} alt="tick" width={17} height={13} />
        ) : (
          enterprise
        )}
      </td>
    </tr>
  )
}
export default TableRow
