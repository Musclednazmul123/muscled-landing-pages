import React from 'react'
import Panel from './panel'
import { faqsData } from '../../../data/questions'
import { panel } from '../../component.type'

const Accordion = () => {
  const displayPanels = (array: typeof faqsData) => {
    return array.map((item: panel, key: number) => {
      return (
        <Panel
          heading={item.heading}
          description={item.description}
          key={key}
          index={key + 1}
        />
      )
    })
  }
  return <div className="space-y-[20px]">{displayPanels(faqsData)}</div>
}
export default Accordion
