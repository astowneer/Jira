"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarDropdownSeeMore from './SidebarDropdownSeeMore'
import { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick'
import ActionTooltip from '@/components/workflow/ActionTooltip'

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false))

  return (
    <header>
      <Link href='/projects' className="hover:underline text-gray-500">Projects</Link>
      <section className="flex items-center justify-between gap-4 ">
        <div className='flex items-center gap-4 pb-4'>
          <Image src='/svg/project.svg' width={24} height={24} alt="see more" />
          <h4 className="text-3xl">Сервіс залізничної компанії</h4>
          <div className="relative flex gap-4">
            <button
              className='hover:bg-gray-200 p-1 w-full'  
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <Image src='/svg/more.svg' width={18} height={18} alt="see more" />
            </button>

            {isOpen && (
              <div ref={dropdownRef}>
                <SidebarDropdownSeeMore className="absolute !left-0 !top-8" />
              </div>
            )}
          </div>
        </div>

        <div className='flex gap-4'>
          {/* <div className='bg-gray-100 hover:bg-gray-300 p-3'>
            <Image src='/svg/share.svg' width={18} height={18} alt="see more" />
          </div>
          <div className='bg-gray-100 hover:bg-gray-300 border-[1px] border-gray-300 rounded-sm p-3'>
            <Image src='/svg/bolt.svg' width={18} height={18} alt="see more" />
          </div> */}
          <ActionTooltip icon="/svg/share.svg" tooltipText="Share" />
          <ActionTooltip icon="/svg/bolt.svg" tooltipText="Automation" />
        </div>
      </section>
    </header>
  );
};

export default MainHeader;