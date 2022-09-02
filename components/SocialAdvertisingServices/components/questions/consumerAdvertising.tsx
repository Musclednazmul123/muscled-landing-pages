import React from 'react'
import List from './list'
import { consumerAdvertisingList } from '../../data/questions'

const ConsumerAdvertising = () => {
  return (
    <div className="flex flex-col space-y3 md:space-y-6 lg:space-y-9">
      <h3>The Benefits of direct to consumer social media advertising</h3>
      <p>
        D2C social advertising grants many benefits for businesses selling
        directly to customers.
      </p>
      <p>With D2C social ads, you'll be able to: </p>
      <List content={consumerAdvertisingList} className="space-y-4" />
      <p>
        If you are aiming to get better results-and heavily invest in
        advertising to consumers who want to purchase from you- then social
        media ads are the perfect solution for you.
      </p>
    </div>
  )
}
export default ConsumerAdvertising
