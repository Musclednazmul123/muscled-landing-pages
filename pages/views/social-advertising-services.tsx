import React from 'react'
import { NextPage } from 'next'
import { HeroSection } from '../../components/SocialAdvertisingServices/sections'

const Page: NextPage = () => {
  return (
    <div className="bg-neutral-700 p-16">
      <HeroSection
        title="Attract, engage and sell with Muscled's D2C Social Advertisement Services"
        description="More than 5 billion people are active social media users turning social platforms into a great source to directly reach consumers (D2C). If you sell B2p products then social ad's will help to breach that gap with your consumers. Letting you and selling to them directly impacts your bottom line results. Keep reading to learn how Muscled can help you reach your goals with our direct to consumer social media advertising services!"
      />
    </div>
  )
}

export default Page
