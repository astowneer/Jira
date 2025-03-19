"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useOutsideClick from '@/hooks/useOutsideClick';
import SidebarContextMenu from './SidebarContextMenu';

const SidebarDropdownItem = ({ item }: SidebarDropdownProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setSeeMore(false);
  });

  const handleSeeMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSeeMore((prev) => !prev);
  }

  return (
    <section ref={dropdownRef}>
      <p className='text-sm text-gray-500'>{item.mainTitle}</p>

      <Link href={item.itemRef} className='flex items-center gap-2 w-full hover:bg-gray-200 pr-2'>
        <Image src={item.itemIcon} width={16} height={16} alt={item.itemTitle} />
        <span className='text-nowrap truncate flex-1 text-left gap-1 p-2 w-full min-w-0'>{item.itemTitle}</span>

        {item.submenu && (
          <button className='hover:bg-gray-300 p-2' onClick={(e) => handleSeeMore(e)}>
            <Image src='/svg/more.svg' width={16} height={16} alt="see more" />
          </button>
        )}
      </Link>

      {seeMore && <SidebarContextMenu />}
    </section>
  );
};

export default SidebarDropdownItem;