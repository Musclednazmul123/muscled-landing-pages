import React from 'react'
import DynamicSection from '../components/DynamicSection'
import Button from '../components/heroSection/button'

const CustomerMediaAdvertising = () => {
  return (
    <div className="bg-red-100">
      <DynamicSection className="h-[80vh] flex-col md:flex-row">
        <div className="flex flex-col basis-[60%] gap-y-4 justify-center">
          <h2>What is direct-to-consumer social media advertising?</h2>
          <p>
            A great way to boost your D2C business are paid social media ads
            that will increase your exposure on social media platforms. With the
            social media algorithms constantly changing it is harder to reach
            and engage with your customers organically through their news feeds.
            Paid advertisements will immediately raise awareness of your brand
            and products.
          </p>
          <p>
            Below we´ll take a deep dive into D2C social advertising, go over
            some examples, and see how plans can help grow your brand. We have
            worked with countless D2C brands-just like yours- to reach amazing
            results using social media advertising. Are you ready to start
            implementing social media advertising? Then contact us online to
            chat with one of the social media professionals in our crew.
          </p>
          <p>
            If you want to talk directly to the source then hit this number to
            reach our Digital Marketing Specialist.
          </p>
        </div>
        <div className="basis-[10%]"></div>
        <div className="flex flex-col justify-around basis-[30%]">
          <div className="bg-neutral-200 rounded-xl basis-[50%]"></div>
          <div className="bg-[#3E5661] p-8 flex justify-start items-center rounded-xl basis-[30%]">
            <Button text="Send Proposal" className="px-8 py-4" />
          </div>
        </div>
      </DynamicSection>
    </div>
  )
}

export default CustomerMediaAdvertising
