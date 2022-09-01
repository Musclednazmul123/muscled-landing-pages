import React, { FC } from 'react'
import { secondTableRow } from '../component.type'

const SecondTableRow: FC<secondTableRow> = ({
  feature,
  pixel,
  catalogs,
  isHead
}) => {
  return (
    <tr
      className={`${
        isHead ? 'font-bold' : ''
      } text-center border-b border-neutral-500`}
    >
      <td className="w-1/2 py-4 px-8 bg-black-80 text-white text-left">
        {feature}
      </td>
      <td className="w-1/4 py-4 px-8 bg-red-6">{`${pixel ? 'Yes' : 'No'}`}</td>
      <td className="w-1/4 py-4 px-8 bg-red-9">{`${
        catalogs ? 'Yes' : 'No'
      }`}</td>
    </tr>
  )
}
export default SecondTableRow
