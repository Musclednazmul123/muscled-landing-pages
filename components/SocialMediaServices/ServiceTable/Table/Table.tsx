import { FC } from 'react'
import { TableProps } from '@/components/Fawwaz/component.type'


const Table: FC<TableProps> = ({ className, children }) => {
  return (
    <table className={`w-full ${className ? className : ''}`}>
        {children}
    </table>
  )
}

export default Table