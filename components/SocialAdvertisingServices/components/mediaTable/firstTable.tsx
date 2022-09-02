import React from 'react'
import DynamicSection from '../DynamicSection'
import { mediaTableData } from '../../data/mediaTable'
import { tableRow } from '../component.type'
import TableRowComponent from './tableRow'
import PhoneImg from '../../../assets/SocialAdvertisingServices/mediaTable/phone.png'
import Image from 'next/image'
import Button from '../heroSection/button'

const FirstTable = () => {
  const displayTableRows = () => {
    return mediaTableData.map((item: tableRow, key: number) => {
      return (
        <TableRowComponent
          feature={item.feature}
          aggressive={item.aggressive}
          marketLeader={item.marketLeader}
          enterprise={item.enterprise}
          isHead={item.isHead}
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col overflow-x-auto">
      <h2 className="text-center my-4 md:my-8 lg:my-16">
        Muscled's D2C Social Media Advertising Services
      </h2>
      <table className="rounded-xl my-8">
        <tbody>
          <tr className="font-bold border-b border-neutral-500 text-center">
            <td className="p-4  bg-black-80 text-white rounded-tl-xl text-left">
              Features
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-3">Aggressive</td>
            <td className="px-8 py-4 w-1/4 bg-red-6">Market Leader</td>
            <td className="px-8 py-4 w-1/4 bg-red-9 rounded-tr-xl">
              Enterprise
            </td>
          </tr>
          {displayTableRows()}
          <tr className="">
            <td className="flex flex-col px-8 py-4 bg-black-80 text-white rounded-bl-xl ">
              <p className="my-4">Give Us a Call if You Need Information</p>
              <a className="flex" href="tel:+18886015359">
                <Image src={PhoneImg} alt="phone" width={24} height={24} />
                <p className="ml-2 font-bold text-xl text-[#48BBFC]">
                  888-601-5359
                </p>
              </a>
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-3 text-center">
              <Button text="Get Started" className="px-8 py-4 m-auto" />
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-6 text-center">
              <Button text="Get Started" className="px-8 py-4 m-auto" />
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-9 rounded-br-xl text-center">
              <Button text="Get Started" className="px-8 py-4" />
            </td>
          </tr>
        </tbody>
      </table>
    </DynamicSection>
  )
}
export default FirstTable
