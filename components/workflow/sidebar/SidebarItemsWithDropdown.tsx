import React, { useState } from 'react'
import SidebarContextMenuAction from './SidebarContextMenuAction';
import Image from 'next/image';
import Link from 'next/link';
import SidebarDropdownContextMenu from './SidebarDropdownContextMenu';
import useOutsideClick from '@/hooks/useOutsideClick';
import SidebarDropdownItem from './SidebarDropdownItem';

declare type SidebarDropdownItem = {
  mainTitle?: string;
  itemIcon: string;
  itemRef: string;
  itemTitle: string;
  submenu?: boolean
}

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

const SidebarItemsWithDropdown = ({ 
  title, 
  icon,
  add, 
  contextMenuLinks, 
  sidebarDropdown 
}: {
  title: string, 
  icon: string,
  add: boolean, 
  contextMenuLinks: Item[], 
  sidebarDropdown: SidebarDropdownItem[]
}) => {
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [contextMenu, setContextMenu] = useState(false);

  const contextRef = useOutsideClick<HTMLDivElement>(() => {
    setTimeout(() => {
      setContextMenu(false);
    }, 200)
  });

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setContextMenu(prev => !prev); 
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  if (!visible) return null;

  return (
    <>
      <li 
        className="p-2 flex justify-between bg-white hover:bg-gray-200 cursor-pointer" 
        onClick={handleDropdownToggle} 
      >
        <div className='flex items-center gap-2'>
          <Image src={icon} width={18} height={18} alt={title} />
          <span className='text-nowrap truncate flex-1 text-left'>{title}</span>
        </div>

        <div className="flex gap-2">
          {add && (
            <button 
              className="hover:bg-gray-300 p-1" 
              onClick={(e) => e.stopPropagation()} 
            >
              <Image src="/svg/plus.svg" width={18} height={18} alt="add project" />
            </button>
          )}
         
          <div className='relative'>
            <button
              className='hover:bg-gray-300 p-1 w-full'  
              onClick={handleMenuClick} 
            >
              <Image src='/svg/more.svg' width={18} height={18} alt="see more" />
            </button>

            {contextMenu && (
              <section 
                ref={contextRef} 
                className='absolute min-w-[200px] bg-white text-black shadow-md border-[1px] text-xs border-gray-200 p-2 z-10'
              >
                {contextMenuLinks.map((item) => <SidebarDropdownContextMenu key={item.title} item={item} setVisible={setVisible} /> )}
              </section>
            )}
          </div>
        </div>
      </li>

      {dropdownOpen && (
        <div className="pl-5 flex flex-col gap-2">
          {sidebarDropdown.map((item) => <SidebarDropdownItem key={item.itemTitle} item={item} />)}
          {title === 'Projects' && (
            <Link href="/explore-more" className="flex gap-2 hover:bg-gray-300 p-2">
              <Image src="/svg/recent.svg" width={16} height={16} alt="View All Projects" />
              <span className="text-nowrap truncate">View All Projects</span>
            </Link> 
          )}
        </div>
      )}
    </>
  );
};

export default SidebarItemsWithDropdown;
