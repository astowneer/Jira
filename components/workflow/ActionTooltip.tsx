import Image from 'next/image'
import React from 'react'

const ActionTooltip = ({ icon, tooltipText, tooltipSide = 'top' }: ActionTooltipProps) => {
  return (
    <div className='relative bg-white hover:bg-gray-200 w-[42px] h-[42px] flex justify-center items-center border-[1px] border-gray-300 rounded-md group'>
      <div className={`
        absolute bg-black text-white text-[10px] px-2 py-1 hidden group-hover:block text-nowrap
        ${tooltipSide === 'top' ? 'bottom-12' : 'top-12'}
      `}>
        {tooltipText}
      </div>
      <Image src={icon} width={18} height={18} alt={tooltipText} />
    </div>
  );
};

export default ActionTooltip;