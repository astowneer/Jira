import { logOut } from '@/lib/actions';
import React from 'react'

const UserLogged = ({ fullUser }: { fullUser: User }) => {
  return (
    <div className="absolute bg-white border-[1px] border-gray-200 flex flex-col space-y-3 rounded-lg drop-shadow-lg right-0 top-10 p-5 min-w-[220px]">
      <div className="flex items-center">
        Hy,&nbsp;
        {fullUser.email ? (
          <span className="font-medium">{fullUser.email}</span>
        ): (
          <span className="font-medium">{fullUser.firstName}</span>
        )}
      </div>
      
      <p className="cursor-pointer hover:text-blue-500 w-fit" onClick={async () => await logOut()}>Log Out</p>
    </div>
  );
};

export default UserLogged;