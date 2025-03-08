import React from 'react'

type OverviewStatusItem = {
  title: string;
  color: string;
}

interface OverviewStatusItemProps {
  item: OverviewStatusItem,
  index: number, 
  onMouseEnter: (index: number) => void, 
  onMouseLeave: (index: null) => void
}

const OverviewStatusItem = ({ 
  item, 
  index, 
  onMouseEnter, 
  onMouseLeave
}: OverviewStatusItemProps) => {
  return (
    <li 
      className="flex items-center gap-1 p-1 hover:underline hover:bg-gray-100" 
      onMouseEnter={() => onMouseEnter(index)} 
      onMouseLeave={() => onMouseLeave(null)}
    >
      <span className={`block size-3 bg-${item.color}-500`} />
      <p className="uppercase text-[10px]">{item.title}</p>
    </li>
  );
};

export default OverviewStatusItem;