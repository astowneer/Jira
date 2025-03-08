"use client";

import React, { useState } from 'react'
import OverviewItem from './OverviewStatusItem';
import OverviewHeader from './OverviewHeader';
import { overviewList } from '@/constants/constants';

const OverviewStatus = () => {
  const [hoverdIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index)
  const handleMouseLeave = () => setHoveredIndex(null)
  
  return (
    <section className="bg-white w-full flex flex-col gap-5 p-5 rounded-md drop-shadow-sm border-[1px] border-gray-200 min-h-[260px]">
      <OverviewHeader
        item={{ 
          title: 'Status overview', 
          description: 'The status overview for this project will display here after you', 
          descriptionTextRef: 'create some issues', 
          descriptionRef: '/'
        }} 
      />

      <div className="flex">
        <div className="flex flex-col justify-center items-center flex-1 min-h-[140px] text-gray-600">
          <h4 className="font-normal text-2xl">0 { hoverdIndex !== null && '%' }</h4>
          <p>{ hoverdIndex ? overviewList[hoverdIndex].title : 'Total issues' }</p>
        </div>

        <ul className="p-2">
          {overviewList.map((item, index) => 
            <OverviewItem 
              key={index} 
              item={item} 
              index={index} 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave} 
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default OverviewStatus;