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
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col">
      <table className="w-full my-8">
        <tbody>
          <tr className="text-center border-b border-neutral-500 font-bold">
            <td className="w-1/2 py-4 px-8 bg-black-80 text-white text-left rounded-tl-xl">
              Features
            </td>
            <td className="w-1/4 py-4 px-8 bg-red-6">Integrations - Pixel</td>
            <td className="w-1/4 py-4 px-8 bg-red-9 rounded-tr-xl">
              Integrations - Catalogs
            </td>
          </tr>
          {displayRows()}
          <tr>
            <td className="flex flex-col px-8 py-4 bg-black-80 text-white rounded-bl-xl">
              <p className="my-4">Give Us a Call if You Need Information</p>
              <a className="flex" href="tel:+18886015359">
                <Image src={PhoneImg} alt="phone" width={24} height={24} />
                <p className="ml-2 font-bold text-xl text-[#48BBFC]">
                  888-601-5359
                </p>
              </a>
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-6">
              <Button text="Get Started" className="px-8 py-4" />
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-9 rounded-br-xl">
              <Button text="Get Started" className="px-8 py-4" />
            </td>
          </tr>
        </tbody>
      </table>
    </DynamicSection>
  )
}
export default SecondTable
