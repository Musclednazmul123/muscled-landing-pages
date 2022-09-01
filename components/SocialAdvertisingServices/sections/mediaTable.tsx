import React from 'react'
import DynamicSection from '../components/DynamicSection'
import { mediaTableData } from '../data/mediaTable'
import { tableRow } from '../components/component.type'
import TableRowComponent from '../components/mediaTable/tableRow'

const MediaTable = () => {
  const displayTableRows = () => {
    return mediaTableData.map((item: tableRow, key: number) => {
      return (
        <TableRowComponent
          feature={item.feature}
          aggressive={item.aggressive}
          marketLeader={item.marketLeader}
          enterprise={item.enterprise}
          isHead={item.isHead}
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col">
      <h2>Muscled's D2C Social Media Advertising Services</h2>
      <table>
        <tbody>{displayTableRows()}</tbody>
      </table>
    </DynamicSection>
  )
}
export default MediaTable
