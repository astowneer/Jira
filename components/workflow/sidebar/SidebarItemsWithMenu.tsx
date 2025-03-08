import { sidebarExtraItems } from '@/constants/constants'
import React, { useState } from 'react'
import SidebarMenuList from './SidebarMenuList';
import SidebarOptionsList from './SidebarOptionsList';

const SidebarItemsWithMenu = ({ sidebarWidth }: { sidebarWidth: number }) => {
  const [menuListIndex, setMenuListIndex] = useState<number>(-1)

  return (
    <li className='relative'>
      {sidebarExtraItems.map((item, index) => (
        <section key={index} className='relative'>
          <SidebarMenuList 
            item={item.represent}
            setMenuListIndex={setMenuListIndex} 
            index={index} 
          />

          {menuListIndex === index && 
            <SidebarOptionsList 
              item={item} 
              sidebarWidth={sidebarWidth} 
              menuListIndex={menuListIndex} 
              setMenuListIndex={setMenuListIndex} 
            />
          }
        </section>
      ))}
    </li>
  );
};

export default SidebarItemsWithMenu;