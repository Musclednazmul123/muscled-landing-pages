import React from 'react'
import styles from './styles.module.css'
import Button from '../heroSection/button'
import Pc from '../../../assets/SocialAdvertisingServices/questions/pc.png'
import Image from 'next/image'

const SocialMediaExamples = () => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-8 lg:space-y-12">
      <h3>Some D2C Social Media Examples</h3>
      <p>
        You have likely seen paid advertisements on various social media
        platforms like Facebook, Twitter, Instagram, Linkedin, and more
      </p>
      <p>
        Let's take a look . a this Facebook ad from Muscled D2C client
        Recreation Outfitters:
      </p>
      <div className="bg-white-gray flex justify-center items-center w-full h-[20vh]">
        Ad Banner
      </div>
      <p>Here is another ad from the same company on Instagram.</p>
      <div className="bg-white-gray flex justify-center items-center w-full h-[20vh]">
        Ad Banner
      </div>
      <p>
        D2C social ad´s come in a myriad of ways designed to reach your goals.
      </p>
      <div className={styles.backgroundImage}>
        <div
          className={styles.overlay + ' p-4 text-white flex justify-between'}
        >
          <div className="basis-3/5 p-4">
            <h3 className="font-bold text-white my-4 md:my-8">
              Need help with your Social media Advertising Services
            </h3>
            <p className="text-2xl my-8">
              Check out our Ecommerce PPC Management Services
            </p>
            <Button text="Veiw the Guide" className="my-4 md:my-8" />
          </div>
          <div className="basis-2/5 flex justify-center items-center">
            <Image src={Pc} alt="computer" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SocialMediaExamples
