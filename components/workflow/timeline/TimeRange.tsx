import Image from 'next/image'
import React from 'react'
import TimeRangeButton from './TimeRangeButton'
import { SetStateAction } from 'react';
import { cn } from '@/lib/utils';
import { timeRangeOptions } from '@/constants/constants';

const TimeRange = ({
  timeRangeSelectedIndex,
  timeRangeOpen,
  setTimeRangeOpen,
  setTimeRangeSelectedIndex,
  setVisibleTimeStart,
  setVisibleTimeEnd
}: {
  timeRangeOpen: boolean,
  timeRangeSelectedIndex: number,
  setTimeRangeOpen:  React.Dispatch<SetStateAction<boolean>>
  setTimeRangeSelectedIndex:  React.Dispatch<SetStateAction<number>>;
  setVisibleTimeStart: React.Dispatch<SetStateAction<number>>,
  setVisibleTimeEnd: React.Dispatch<SetStateAction<number>>}) => {
  return (
    <div className='bg-white text-gray-500 w-fit flex gap-1 text-sm px-1 py-2 rounded-xs drop-shadow-xs border-[1px] border-gray-200 fixed bottom-10 right-10'>
      {timeRangeOpen && (
        <div className="flex gap-1">
          {timeRangeOptions.map((item, index) => (
            <TimeRangeButton 
              item={item} 
              key={item.title} 
              index={index} 
              isSelected={index === timeRangeSelectedIndex} 
              setTimeRangeSelectedIndex={setTimeRangeSelectedIndex} 
              setVisibleTimeStart={setVisibleTimeStart} 
              setVisibleTimeEnd={setVisibleTimeEnd} 
            />
          ))}
        </div>
      )}

      <button 
        className='bg-white rounded-xs font-semibold hover:bg-gray-100 p-3 border-transparent' 
        onClick={() => {setTimeRangeOpen(prev => !prev)}}
      >
        <Image 
          src="/svg/open-right.svg"
          width={16}
          height={16}
          alt="open right"
          className={cn({"rotate-180": !timeRangeOpen})}
        />
      </button>
    </div>
  )
}

export default TimeRange