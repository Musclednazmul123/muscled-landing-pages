import React from 'react'
import Panel from './panel'
import { faqsData } from '../../../data/questions'

const Accordion = () => {
  const displayPanels = (array: typeof faqsData) => {
    return array.map(
      (item: { heading: string; description: string }, key: number) => {
        return <Panel heading={item.heading} description={item.description} />
      }
    )
  }
  return <>{displayPanels(faqsData)}</>
}
export default Accordion
