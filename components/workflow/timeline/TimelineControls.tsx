"use client"

import Search from '@/components/workflow/Search'
import UserTooltip from '../UserTooltip'
import ActionTooltip from '../ActionTooltip'
import TimelineDropdown from './TimelineDropdown'
import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { timelineActionItems, timelineDropdownItems, users } from '@/constants/constants'

const TimelineControls = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  
  return (
    <article className="flex justify-between items-center gap-3 py-5">
      <section className="flex items-center gap-3 flex-1 w-full">
        <div className={cn(
            "w-[150px]", 
            { "xl:max-w-[230px] w-full": searchOpen }
          )}
        >
          <Search 
            placeholder='Search timeline' 
            setSearchOpen={setSearchOpen} 
            className='border-2 border-gray-300'
          />
        </div>

        <div className="flex">
          {users.map((user, index) => 
            <UserTooltip key={user.fullName} user={user} className={`z-${index * 10}`} />
          )}

          <UserTooltip isDefault={true} />
        </div>

        <div className='flex flex-shrink-0 gap-2'>
          {timelineDropdownItems.map((item, index) => {
            let screen = ''

            if (index === 0) {
              screen = 'max-md:hidden';
            } else if (index === 1) {
              screen = 'max-lg:hidden';
            } else {
              screen = 'max-xl:hidden';
            }

            return (
              <div className={`block ${screen} z-10`} key={item.title}>
                <TimelineDropdown title={item.title} items={item.items} />
              </div>
            )}
          )}
        </div>
      </section>
      
      <section className='flex items-center gap-2'>
        {timelineActionItems.map((item) => (
          <ActionTooltip 
            key={item.tooltipText} 
            icon={item.icon} 
            tooltipText={item.tooltipText} 
            tooltipSide="bottom" 
          />
        ))}
      </section>
    </article>
  );
};

export default TimelineControls;