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
          key={key}
        />
      )
    })
  }
  return (
    <DynamicSection className="flex-col overflow-x-auto ">
      <h2 className="text-center my-[120px] text-[40px] text-black-80">
        Muscled's D2C Social Media Advertising Services
      </h2>
      <table className="rounded-xl h-[1054px]">
        <tbody>
          <tr className="font-bold border-b border-[rgba(0,0,0,0.1)] text-center min-h-[84px]">
            <td className="p-4  bg-black-80 text-white rounded-tl-xl text-left text-[16px] h-[84px] w-[310px]">
              Features
            </td>
            <td className="px-8 py-4  bg-red-3 text-[16px] h-[84px] w-[310px]">
              Aggressive
            </td>
            <td className="px-8 py-4  bg-red-6 text-[16px] h-[84px] w-[310px]">
              Market Leader
            </td>
            <td className="px-8 py-4  bg-red-9 rounded-tr-xl text-[16px] h-[84px] w-[310px]">
              Enterprise
            </td>
          </tr>
          {displayTableRows()}
          <tr className="text-[16px] max-h-[154px]">
            <td className="flex flex-col px-8 py-[30px] bg-black-80 text-white rounded-bl-xl border-t-[1px] border-[rgba(0,0,0,0.1)]">
              <p className="my-4 text-[16px] leading-6">
                Give Us a Call if You Need Information
              </p>
              <a className="flex" href="tel:+18886015359">
                <div className="flex items-center">
                  <Image src={PhoneImg} alt="phone" width={24} height={24} />
                </div>
                <p className="ml-2 font-bold text-[24px] text-[#48BBFC]">
                  888-601-5359
                </p>
              </a>
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-3 text-center">
              <Button
                text="Get Started"
                className="px-8 py-4 m-auto font-semibold"
              />
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-6 text-center">
              <Button
                text="Get Started"
                className="px-8 py-4 m-auto font-semibold"
              />
            </td>
            <td className="px-8 py-4 w-1/4 bg-red-9 rounded-br-xl text-center font-semibold">
              <Button text="Get Started" className="px-8 py-4" />
            </td>
          </tr>
        </tbody>
      </table>
    </DynamicSection>
  )
}
export default FirstTable
