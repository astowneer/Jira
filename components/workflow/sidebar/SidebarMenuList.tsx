import Image from 'next/image'
import React, { SetStateAction } from 'react'
import SidebarContextMenuAction from './SidebarContextMenuAction';

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
        <SidebarContextMenuAction item={{ icon: item.icon, title: item.title }} /> 
      </div>
      <Image src='/svg/open-right.svg' width={18} height={18} alt='open window' />
    </div>
  );
};

export default SidebarItemWithContextMenu;