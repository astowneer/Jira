import Image from 'next/image'
import React from 'react'
import OverviewTextWithLink from './OverviewTextWithLink';

const OverviewActivity = () => {
  return (
    <section className="bg-white w-full flex flex-col justify-center items-center gap-1 p-5 rounded-md drop-shadow-sm border-[1px] border-gray-200 min-h-[260px]">
      <Image 
        src='/svg/overview-activity.svg' 
        width={80} 
        height={80} 
        alt='overview-activity' 
      />

      <div className="flex flex-col space-y-1 items-center max-w-80">
        <h4 className="font-semibold text-sm">No activity yet</h4>
        <OverviewTextWithLink item={{ 
            description: 'Create a few issues and invite some teammates to your project to see your project activity.' 
          }} 
          className='text-center'
        />
      </div>
    </section>
  );
};

export default OverviewActivity;