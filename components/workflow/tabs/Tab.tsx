import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link';
import React, { SetStateAction } from 'react'

type Tab = {
  icon: string;
  title: string;
  route: string;
}

interface TabProps {
  tab: Tab;
  index: number, 
  isSelected: boolean,
  tabContextMenuIndex: number,
  setTabContextMenuIndex: React.Dispatch<SetStateAction<number>>
}

const Tab = ({ 
  tab, 
  index, 
  isSelected,
  tabContextMenuIndex, 
  setTabContextMenuIndex,
}: TabProps) => {
  const tabMoreRef = useOutsideClick<HTMLDivElement>(() => {
    if (tabContextMenuIndex === index) {
      setTimeout(() => {
        setTabContextMenuIndex((prev) => (prev === index ? -1 : prev));
      }, 200);
    }
  });

  const handleSeeTabMore = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    setTabContextMenuIndex((prev) => prev === index ? -1 : index)
  }
  
  return (
    <Link href={tab.route} className="flex items-center gap-1 group pb-2">
      <div className="p-2 h-full block group-hover:hidden select-none">
        <Image 
          width={18} 
          height={18}
          src={tab.icon}
          alt={tab.title}
          className="filter block group-hover:hidden" 
          style={isSelected ? { filter: "invert(58%) sepia(71%) saturate(5949%) hue-rotate(205deg) brightness(103%) contrast(93%)" } : {}}
        />
      </div>
      
      <div 
        ref={tabMoreRef} 
        onClick={(e) => handleSeeTabMore(e, index)}
        className="hover:bg-gray-100 p-2 h-full hidden group-hover:block" 
      >
        <Image src='/svg/more.svg' width={18}  height={18} alt='more' />
      </div> 

      <p className={cn(
        "font-medium text-sm text-gray-700 group-hover:text-blue-500",
        { "text-blue-500" : isSelected }
      )}
      >
        {tab.title}
      </p>

      <span className={cn(
          "absolute -bottom-[2px] left-0 w-full h-[2px] bg-blue-500 hidden group-hover:block rounded-4xl", 
          { "bg-blue-500 block" : isSelected }
        )}
      />
    </Link>
  );
};

export default Tab;