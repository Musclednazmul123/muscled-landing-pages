import React, { FC } from 'react'
import { secondTableRow } from '../component.type'
import Value from './featureValue'

const SecondTableRow: FC<secondTableRow> = ({
  feature,
  pixel,
  catalogs,
  isHead
}) => {
  return (
    <tr
      className={`${
        isHead ? 'font-bold' : 'font-light'
      } text-center border-b border-neutral-500 text-[16px]`}
    >
      <td className="w-1/2 py-4 px-[20px] bg-black-80 text-white text-left leading-6">
        {feature}
      </td>
      <Value featureValue={pixel} type="pixel" />
      <Value featureValue={catalogs} type="catalogs" />
    </tr>
  )
}
export default SecondTableRow
