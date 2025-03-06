import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

const TabLink = ({ 
  link, 
  index, 
  tabMoreSelectedIndex, 
  isSelected, 
  setTabMoreOpenIndex
}: TabLinkProps) => {
  const tabMoreRef = useOutsideClick<HTMLDivElement>(() => {
    if (tabMoreSelectedIndex === index) {
      setTimeout(() => setTabMoreOpenIndex(-1), 100); 
    }
  });

  const handleSeeTabMore = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setTabMoreOpenIndex(index)
  }
  
  return (
    <>
      <div className="p-2 h-full block group-hover:hidden">
        <Image 
          src={link.icon}
          width={18} 
          height={18} 
          alt={link.title}
          className="filter block group-hover:hidden" 
          style={isSelected ? { filter: "invert(58%) sepia(71%) saturate(5949%) hue-rotate(205deg) brightness(103%) contrast(93%)" } : {}}
        />
      </div>

      <div 
        ref={tabMoreRef} 
        onClick={(e) => handleSeeTabMore(e)}
        className="hover:bg-gray-100 p-2 h-full hidden group-hover:block" 
      >
        <Image src='/svg/more.svg' width={18}  height={18}  alt={link.title} />
      </div> 
      
      <span className={cn(
        "font-semibold text-gray-500 group-hover:text-blue-500",
        { "text-blue-500" : isSelected }
        )}
      >
        {link.title}
      </span>
      <span className={cn(
        "absolute -bottom-[2px] left-0 w-full h-[2px] bg-blue-500 hidden group-hover:block rounded-4xl", 
        { "bg-blue-500 block" : isSelected }
        )}
      />
    </>
  );
};

export default TabLink;
