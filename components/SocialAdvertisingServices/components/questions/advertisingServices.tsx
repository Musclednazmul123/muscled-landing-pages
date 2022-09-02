import React from 'react'
import List from './list'
import { d2cEcommerce, d2cPartner, d2cBusiness } from '../../data/questions'

const AdvertisingServices = () => {
  return (
    <div className="space-y-3 md:space-y-6 lg:space-y-9 flex flex-col">
      <h3>What do Muscled´s social media advertising services include?</h3>
      <p>
        In the table above we showed you our custom D2C social ad deliverables.
        All of our plans are designed from the ground up to help D2C brands
        increase their online presence, engagement, sales, and leads on the top
        social media platforms.
      </p>
      <p>With Muscled as your D2C partner you will acquire:</p>
      <List content={d2cPartner} className="ml-12" />
      <p>
        Extremely helpful for D2C business, access to to advanced ad targeting
        options among them:
      </p>
      <List content={d2cBusiness} className="ml-12" />
      <p>
        Our D2C ecommerce clients will also be able to enjoy a streamlined
        integration with platforms like:
      </p>
      <List content={d2cEcommerce} className="ml-12" />
      <p>
        With our custom deliverables and pricing options we will help your D2C
        business achieve the best possible results. Still not convinced? Then
        check out Muscled´s previous clients right here.
      </p>
      <p>
        Like what you see? Then contact us to start building your very own D2C
        ad plan!
      </p>
    </div>
  )
}
export default AdvertisingServices
