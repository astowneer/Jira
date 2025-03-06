import Image from 'next/image'
import React, { Fragment } from 'react'
import { Trash } from 'lucide-react';
import { recentSidebarLinks } from '@/constants/constants';
import SidebarSectionRepresent from './SidebarSectionRepresent';

const SidebarDropdownSeeMore = ({ className }: { className?: string }) => {
  return (
    <section className={`absolute left-44 min-w-[240px] flex flex-col space-y-1 text-sm p-4 shadow-lg bg-white border-gray-200 z-10 ${className}`}>
      {recentSidebarLinks.map((item) => (
        <Fragment key={item.title}>
          {item.trash ? (
            <section className={'flex items-center gap-2 p-2 hover:bg-gray-200 text-red-500'}>
              <Trash width={16} height={16} />
              <p>{item.title}</p>
            </section>
          ): (
            <SidebarSectionRepresent item={{ ...item, size: 16}} className='flex items-center gap-2 p-2 hover:bg-gray-200' />
          )}
        </Fragment>
      ))}
      
      <section className='flex items-center gap-3 pt-5 text-sm'>
        <div className="w-[38px] h-auto flex flex-shrink-0">
          <Image src="/images/jira.png" width={1200} height={814} alt="jira logo" />
        </div>

        <div className='flex flex-col text-gray-600 text-xs'>
          <p className='font-semibold'>Software project</p>
          <p>Team management</p>
        </div>
      </section>
    </section>
  );
};

export default SidebarDropdownSeeMore;