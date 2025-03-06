import Image from 'next/image';
import React from 'react'

const MainTabs = () => {
  return (
    <div className='pb-3 border-b-2'>
      <div className='flex gap-2 border-b-2 border-gray-400 hover:border-blue-500 hover:text-blue-500 w-fit'>
        <Image src='/svg/recent.svg' width={18} height={18} alt="see more" />
        <span className='font-semibold text-gray-500'>Summary</span>
      </div>
    </div>
  );
};

export default MainTabs;