import Image from 'next/image'
import React from 'react'

const ActionTooltip = ({ icon, tooltipText, tooltipSide = 'top' }: ActionTooltipProps) => {
  return (
    <div className='relative bg-white hover:bg-gray-200 w-[35px] h-[35px] flex justify-center items-center border-[1px] border-gray-300 rounded-md group'>
      <div className={`
          absolute bg-black text-white text-[10px] px-2 py-1 hidden group-hover:block text-nowrap
          ${tooltipSide === 'top' ? 'bottom-10' : 'top-10'}
        `}
      >
        {tooltipText}
      </div>
      <Image src={icon} width={16} height={16} alt={tooltipText} />
    </div>
  );
};

export default ActionTooltip;