import React from 'react'
import { SetStateAction } from 'react'

type Status = {
  status: string;
}

type Issue = {
  title: string;
  icon: string;
  filter: string;
}

const BacklogDropdownStatus = ({ item, index, handleChangeStatus }: { item: Status, index: number, handleChangeStatus: (value: string, index: number ) => void }) => {
  return (
    <div 
      className="flex flex-col gap-3 bg-white hover:bg-gray-100 border-l-[3px] border-transparent hover:border-blue-500 px-2 py-1 select-none" 
      onClick={() => handleChangeStatus(item.status, index)}
    >
      <div className="flex gap-1 overflow-hidden">
        <div className="truncate text-ellipsis whitespace-nowrap uppercase bg-blue-400 text-[10px] font-semibold rounded-sm flex gap-1 px-1">{item.status}</div>
      </div>
    </div>
  )
}

export default BacklogDropdownStatus