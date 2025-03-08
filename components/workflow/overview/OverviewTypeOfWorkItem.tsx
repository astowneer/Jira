import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type OverviewTypeOfWorkItem = {
  icon: string;
  filter: string;
  title: string;
  ref: string;
}

const OverviewTypeOfWorkItem = ({ item, className }: { item: OverviewTypeOfWorkItem, className?: string }) => {
  return (
    <Link 
      href={item.ref} 
      className={`flex items-center gap-2 hover:bg-gray-100 p-2 pr-0 hover:underline ${className}`}
    >
      <div className="flex gap-2 min-w-[100px]">
        <Image 
          src={item.icon} 
          width={16} 
          height={16} 
          style={{ filter: item.filter }} 
          alt='okey'
        />
        <h4 className="hover:underline text-xs">{item.title}</h4>
      </div>
      <div className="bg-gray-200 h-[18px] flex-1" />
    </Link>
  );
};

export default OverviewTypeOfWorkItem;