import Image from 'next/image'
import React from 'react'

const UserTooltip = ({ user, size = 22, borderSize = 8, isDefault, className }: UserTooltipProps) => {
  const userColorClass = user ? 'bg-' + user.color + '-500' : '';
  const userColorIcon = isDefault ?  'grayscale opacity-50' : 'invert';
  const outlineClass = isDefault
    ? 'outline-dashed outline-gray-400 outline-2'
    : `outline outline-white outline-[3px]`;

  return (
    <section className={`relative size-8 rounded-full flex justify-center items-center ${outlineClass} -mr-1 group ${userColorClass} ${className} hover:z-50`}>
      <Image src='/svg/user-bold.svg' width={size} height={size} alt='user' className={userColorIcon} />
      <p className="absolute rounded-sm w-fit top-9 text-[10px] text-white whitespace-nowrap p-1 bg-neutral-800 hidden group-hover:block">
        {isDefault ? 'Unassigned' : user?.fullName}
      </p>
      <p className='hidden'>{borderSize}</p>
    </section>
  );
};

export default UserTooltip;
