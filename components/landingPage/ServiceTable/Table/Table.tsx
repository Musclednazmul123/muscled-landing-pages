import { FC } from 'react'


const Table: FC<TableProps> = ({ className, children }) => {
  return (
    <table className={`w-full ${className ? className : ''}`}>
        {children}
    </table>
  )
}

export default Table