import React from 'react'
import List from './list'
import { socialAdvertisingList } from '../../data/questions'

const SocialAdvertising = () => {
  return (
    <div
      className="space-y-3 md:space-y-6 lg:space-y-9 flex flex-col"
      id="socialAdvertising"
    >
      <h3 className="font-bold text-[40px] leading-[52px] text-black-80">
        Why is D2C social advertising for?
      </h3>
      <p>Unsure if direct to consumer social advertising is right for you?</p>
      <p>
        D2C social media ads are a perfect fit for the following businesses:
      </p>
      <List content={socialAdvertisingList} className="space-y-4" />
      <p>
        If you want to learn more talk to one of our experts on D2C social
        advertisement to help you decide is this is good for your business.
      </p>
      <p>
        Contact our social media professionals at{' '}
        <a className="text-xl" href="tel:+123456789">
          XXXXXXXXXXX
        </a>{' '}
        or hit us up online to learn how to expand your D2C brand!
      </p>
    </div>
  )
}
export default SocialAdvertising
