"use client"

import Search from '@/components/workflow/Search'
import UserTooltip from '@/components/workflow/UserTooltip'
import React, { useState } from 'react'
import { cn } from '@/lib/utils';

type UserTooltip = {
  color: string;
  fullName: string;
}

const BoardControls = ({ users }: { users: UserTooltip[] }) => {
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
      </section>
    </article>
  );
};

export default BoardControls;