import React from 'react'
import styles from './styles.module.css'
import Button from '../heroSection/button'
import Pc from '../../../assets/SocialAdvertisingServices/questions/pc.png'
import Image from 'next/image'

const SocialMediaExamples = () => {
  return (
    <div
      className="flex flex-col space-y-3 md:space-y-6 lg:space-y-9"
      id="socialMediaExamples"
    >
      <h3>Some D2C Social Media Examples</h3>
      <p>
        You have likely seen paid advertisements on various social media
        platforms like Facebook, Twitter, Instagram, Linkedin, and more
      </p>
      <p>
        Let's take a look . a this Facebook ad from Muscled D2C client
        Recreation Outfitters:
      </p>
      <div
        className={
          ' flex justify-center items-center w-full h-[220px] ' + styles.pic1
        }
      ></div>
      <p>Here is another ad from the same company on Instagram.</p>
      <div
        className={
          ' flex justify-center items-center w-full h-[220px] ' + styles.pic2
        }
      ></div>
      <p>
        D2C social ad´s come in a myriad of ways designed to reach your goals.
      </p>
      <div className={styles.backgroundImage}>
        <div
          className={
            styles.overlay +
            ' p-4 text-white flex flex-col md:flex-row justify-between items-center w-[760px] h-[568px]'
          }
        >
          <div className="basis-3/5 min-w-[480px] min-h-[180px] p-4">
            <h3 className="font-bold text-white mt-[80px] text-[40px] leading-[60px]">
              Need help with your Social media Advertising Services
            </h3>
            <p className="text-[24px] font-bold mt-[20px] min-w-[480px] min-h-[180px] leading-[36px]">
              Check out our Ecommerce PPC Management Services
            </p>
            <Button
              text="Veiw the Guide"
              className=" px-[40px] py-[15px] mb-[40px]"
            />
          </div>
          <div className="basis-2/5 w-[200px] flex justify-center items-center">
            <Image src={Pc} alt="computer" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SocialMediaExamples
