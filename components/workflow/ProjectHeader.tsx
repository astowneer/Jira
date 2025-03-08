"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SidebarContextMenu from './sidebar/SidebarContextMenu'
import { useState } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick'
import ActionTooltip from '@/components/workflow/ActionTooltip'

const projectHeaderTooltipLinks = [
  {
    icon: "/svg/share.svg",
    tooltipText: "Share"
  },
  {
    icon: "/svg/bolt.svg",
    tooltipText: "Automation"
  }
]

const ProjectHeader = ({ title }: { title: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setTimeout(() => setIsOpen(false), 200); 
  });

  return (
    <header>
      <Link href='/projects' className="hover:underline text-gray-500">Projects</Link>

      <section className="flex items-center justify-between gap-4 ">
        <div className='flex items-center gap-2 pb-4'>
          <div className='flex items-center gap-4'>
            <Image src='/svg/project.svg' width={24} height={24} alt="see more" />
            <h4 className="text-3xl max-md:text-xl">{title}</h4>
          </div>
         
          <div className="relative flex">
            <button
              className='hover:bg-gray-200 p-1 w-full'  
              onClick={() => { setIsOpen((prev) => !prev)}}
            >
              <Image src='/svg/more.svg' width={18} height={18} alt="see more" />
            </button>
            
            {isOpen && 
              <div ref={dropdownRef}>
                <SidebarContextMenu className="absolute !left-0 !top-8" />
              </div>
            }
          </div>
        </div>

        <div className='flex gap-4'>
          {projectHeaderTooltipLinks.map((item) => 
            <ActionTooltip key={item.tooltipText} icon={item.icon} tooltipText={item.tooltipText} />
          )}
        </div>
      </section>
    </header>
  );
};

export default ProjectHeader;