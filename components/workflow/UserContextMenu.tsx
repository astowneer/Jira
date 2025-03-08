import React from 'react'
import { logOut } from '@/lib/actions';

const UserContextMenu = ({ fullUser }: { fullUser: User }) => {
  return (
    <section className="absolute text-xs bg-white border-[1px] border-gray-200 flex flex-col space-y-2 rounded-lg drop-shadow-lg right-0 top-10 p-3 min-w-max">
      <div className="flex items-center">
        Hy,&nbsp;
        
        {fullUser.email ? 
          <span className="font-medium">{fullUser.email}</span> :
          <span className="font-medium">{fullUser.firstName}</span>
        }
      </div>
      
      <p 
        className="cursor-pointer hover:text-blue-500 w-fit" 
        onClick={async () => await logOut()}
      >
        Log Out
      </p>
    </section>
  );
};

export default UserContextMenu;