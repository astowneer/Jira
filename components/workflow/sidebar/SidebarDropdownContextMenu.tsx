import Link from 'next/link'
import React, { SetStateAction } from 'react'
import SidebarContextMenuAction from './SidebarContextMenuAction'
import useOutsideClick from '@/hooks/useOutsideClick';

type LinkItem = {
  type: "link";
  ref: string;
  icon: string;
  title: string;
  size?: number;
};

type ButtonItem = {
  type: "btn";
  ref?: never; 
  icon: string;
  title: string;
  size?: number;
};

type Item = LinkItem | ButtonItem;

const SidebarDropdownContextMenu = ({ item, setVisible }: { item: Item, setVisible?: React.Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
      {item.type === "link" ? (
        <Link 
          href={item.ref}
          onClick={(e) => e.stopPropagation()}
        >
          <SidebarContextMenuAction 
            item={{ 
              icon: item.icon, title: item.title, size: 16 
            }} 
            className='flex items-center gap-2 p-2 hover:bg-gray-200' 
          />
        </Link>
      ): (
        <button 
          className='w-full'
          onClick={setVisible && (() => setVisible(false))}
        >
          <SidebarContextMenuAction 
            item={{ 
              icon: item.icon, title: item.title, size: 16 
            }} 
            className='flex items-center gap-2 p-2 hover:bg-gray-200' 
          />
        </button>
      )}
    </>
  );
};

export default SidebarDropdownContextMenu;