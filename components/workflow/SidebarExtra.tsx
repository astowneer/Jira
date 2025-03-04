import Image from 'next/image'
import React from 'react'
import SidebarSectionRepresent from './SidebarSectionRepresent'

const SidebarExtra = ({ item, index, onClick }: SidebarExtraProps) => {
  return (
    <li onClick={() => onClick(index)} className='flex gap-2 p-2 hover:bg-gray-200 hover:text-gray-500 group'>
      <div className='flex-1'>
        <SidebarSectionRepresent item={{ icon: item.icon, title: item.title }} /> 
      </div>

      <Image src='/svg/open-right.svg' width={18} height={18} alt='open window' />
    </li>
  );
};

export default SidebarExtra;