import Image from 'next/image'
import React from 'react'
import OverviewTextWithLink from './OverviewTextWithLink'

const OverviewEpicProgres = () => {
  return (
    <section className="bg-white w-full flex flex-col justify-center items-center gap-1 p-5 rounded-md drop-shadow-sm border-[1px] border-gray-200 min-h-[260px]">
      <Image 
        src='/svg/epic-progress.svg' 
        width={80} 
        height={80} 
        alt='epic-progress'
      />

      <div className="flex flex-col space-y-1 items-center max-w-80">
        <h4 className="font-semibold text-sm">Epic progress</h4>
        <OverviewTextWithLink 
          item={{ 
            description: 'Use epics to track larger initiatives in your project.', 
            descriptionRef: 'What is an epic?', 
            ref: '/'
          }}  
          className="text-center"
        />
      </div>
    </section>
  );
};

export default OverviewEpicProgres;