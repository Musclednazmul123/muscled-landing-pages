import React, { FC } from 'react'
import { tableRow } from '../component.type'

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
      <td className="bg-neutral-500 text-left">{feature}</td>
      <td className="bg-red-100">{aggressive}</td>
      <td className="bg-red-200">{marketLeader}</td>
      <td className="bg-red-300">{enterprise}</td>
    </tr>
  )
}
export default TableRow
