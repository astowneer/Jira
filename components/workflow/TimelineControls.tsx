"use client"

import Search from '@/components/workflow/Search'
import React, { useState } from 'react'
import UserTooltip from './UserTooltip'
import ActionTooltip from './ActionTooltip'
import { cn } from '@/lib/utils';
import TimelineDropdown from './TimelineDropdown'
import { timelineActionItems, timelineDropdownItems, users } from '@/constants/constants'

const TimelineControls = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  
  return (
    <div className="flex justify-between items-center gap-5 py-2">
      <section className="flex items-center gap-4 flex-1">
        <div className={cn("w-[150px]", { "xl:max-w-[230px] w-full": searchOpen })}>
          <Search placeholder='Search timeline' setSearchOpen={setSearchOpen} className='border-2 border-gray-300'/>
        </div>

        <div className="flex">
          {users.map((user) => <UserTooltip key={user.fullName} user={user} />)}
          <UserTooltip isDefault={true} />
        </div>

        <div className='flex gap-4'>
          {timelineDropdownItems.map((item, index) => {
            let screen = ''

            if (index === 0) {
              screen = 'max-md:hidden';
            } else if (index === 1) {
              screen = 'max-lg:hidden';
            } else if (index === 2) {
              screen = 'max-xl:hidden';
            }

             return  (
              <div className={`block ${screen}`} key={item.title}>
                <TimelineDropdown title={item.title} items={item.items} />
              </div>
            )}
          )}
         
        </div>
      </section>
      
      <section className='flex items-center gap-3'>
        {timelineActionItems.map((item) => (
          <ActionTooltip 
            key={item.tooltipText} 
            icon={item.icon} 
            tooltipText={item.tooltipText} 
            tooltipSide="bottom" 
          />
        ))}
      </section>
    </div>
  );
};

export default TimelineControls;