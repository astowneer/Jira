import Image from 'next/image'
import React, { SetStateAction } from 'react'

interface SidebarItemWithContextMenuProps {
  item: SidebarExtraType;
  index: number;
  setMenuListIndex: React.Dispatch<SetStateAction<number>>;
}

const SidebarItemWithContextMenu = ({ 
  item,
  index, 
  setMenuListIndex 
}: SidebarItemWithContextMenuProps) => {
  return (
    <div 
      onClick={() => setMenuListIndex(index)} 
      className='flex gap-2 p-2 hover:bg-gray-200 hover:text-gray-500 group'
    >
      <div className='flex-1'>
        <div className={`flex items-center gap-2`}>
          <Image src={item.icon} width={18} height={18} alt={item.title} />
          <span className='text-nowrap truncate flex-1 text-left'>{item.title}</span>
        </div>
      </div>
      <Image src='/svg/open-right.svg' width={18} height={18} alt='open window' />
    </div>
  );
};

export default SidebarItemWithContextMenu;