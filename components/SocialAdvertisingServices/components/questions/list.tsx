import Link from 'next/link'
import React, { FC } from 'react'
import { ListType } from '../component.type'

const List: FC<ListType> = ({ content, className, id, link }) => {
  const displayList = (
    array: { content: string; link: string }[] | string[]
  ) => {
    console.log(link)
    return array.map(
      (item: { content: string; link: string } | string, key: number) => {
        return (
          <Link href={`#${item.link}`} key={key}>
            <li>{typeof item === 'object' ? item.content : item}</li>
          </Link>
        )
      }
    )
  }
  return (
    <ul
      className={`${className ? className : ''} list-disc ml-12`}
      id={`${id ? id : ''}`}
    >
      {displayList(content)}
    </ul>
  )
}
export default List
