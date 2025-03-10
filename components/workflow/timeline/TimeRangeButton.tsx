import { cn } from '@/lib/utils';
import moment from 'moment';
import React from 'react';
import { SetStateAction } from 'react';

type TimeRangeOption = {
  title: string;
  changeOption: "day" | "week" | "month" | "year";
};

const TimeRangeButton = ({
  item,
  index,
  isSelected,
  setTimeRangeSelectedIndex,
  setVisibleTimeStart,
  setVisibleTimeEnd
}: {
  item: TimeRangeOption;
  index: number;
  isSelected: boolean,
  setTimeRangeSelectedIndex:  React.Dispatch<SetStateAction<number>>;
  setVisibleTimeStart: React.Dispatch<SetStateAction<number>>,
  setVisibleTimeEnd: React.Dispatch<SetStateAction<number>>
}) => {

const changeTimeRange = (range: "day" | "week" | "month" | "year") => {
    let newStart, newEnd;
    const now = moment();

    switch (range) {
      case "day":
        newStart = now.startOf("day").valueOf();
        newEnd = now.endOf("day").valueOf();
        break;
      case "week":
        newStart = now.startOf("week").valueOf();
        newEnd = now.endOf("week").valueOf();
        break;
      case "month":
        newStart = now.startOf("month").valueOf();
        newEnd = now.endOf("month").valueOf();
        break;
      case "year":
        newStart = now.startOf("year").valueOf();
        newEnd = now.endOf("year").valueOf();
        break;
      default:
        return;
    }

    setVisibleTimeStart(newStart);
    setVisibleTimeEnd(newEnd);
  };

  return (
    <>
      {index === 1 && <div className='border-l-[1px] border-gray-300' /> } 
     
      <button
        className={cn(
          "bg-white rounded-sm font-semibold hover:bg-gray-100 p-2", 
          { "bg-gray-100 text-blue-500 rounded-xs font-semibold p-2 border-[1px] border-blue-500" : isSelected},
        )}
        onClick={() => { 
          changeTimeRange(item.changeOption);
          setTimeRangeSelectedIndex(index);
        }}
      >
        {item.title}
      </button>

      {index === 3 && <div className='border-r-[1px] border-gray-300' /> } 
    </>
  );
};

export default TimeRangeButton;
