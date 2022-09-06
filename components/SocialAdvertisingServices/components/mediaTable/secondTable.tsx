import React, { FC } from 'react'
import DynamicSection from '../DynamicSection'
import { secondTableData } from '../../data/mediaTable'
import { secondTableRow } from '../component.type'
import SecondTableRowComponent from './secondTableRow'
import Button from '../heroSection/button'
import PhoneImg from '../../../assets/SocialAdvertisingServices/mediaTable/phone.png'
import Image from 'next/image'

const SecondTable = () => {
  const displayRows = () => {
    return secondTableData.map((item: secondTableRow, key: number) => {
      return (
        <SecondTableRowComponent
          feature={item.feature}
          pixel={item.pixel}
          catalogs={item.catalogs}
          isHead={item.isHead}
          key={key}
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col overflow-x-auto">
      <table className="w-full my-8">
        <tbody>
          <tr className="text-center border-b border-neutral-500 font-bold text-[16px]">
            <td className=" py-4 px-[20px] bg-black-80 text-white text-left rounded-tl-xl w-[600px]">
              Features
            </td>
            <td className=" py-4 px-8 bg-red-6 w-[320px]">
              Integrations - Pixel
            </td>
            <td className=" py-4 px-8 bg-red-9 rounded-tr-xl w-[320px]">
              Integrations - Catalogs
            </td>
          </tr>
          {displayRows()}
          <tr className="text-[16px]">
            <td className="flex flex-col px-[20px] py-[30px] bg-black-80 text-white rounded-bl-xl">
              <p className="my-4">Give Us a Call if You Need Information</p>
              <a className="flex" href="tel:+18886015359">
                <div className="flex items-center">
                  <Image src={PhoneImg} alt="phone" width={24} height={24} />
                </div>
                <p className="ml-2 font-bold text-[24px] text-[#48BBFC]">
                  888-601-5359
                </p>
              </a>
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-6 text-center">
              <Button text="Get Started" className="px-8 py-4 font-semibold" />
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-9 rounded-br-xl text-center">
              <Button text="Get Started" className="px-8 py-4 font-semibold" />
            </td>
          </tr>
        </tbody>
      </table>
    </DynamicSection>
  )
}
export default SecondTable
