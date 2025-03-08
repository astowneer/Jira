import Image from 'next/image'
import React from 'react'

type OverviewBlock = {
  icon: string;
  title: string;
  timeDescription: string;
};

const OverviewBlock = ({ item }: { item: OverviewBlock }) => {
  return (
    <section className="bg-white p-3 flex gap-3 items-center rounded-md drop-shadow-sm border-[1px] border-gray-200">
      <div className="bg-gray-100 rounded-md p-3 flex justify-center items-center">
        <Image src={item.icon} width={20} height={20} alt='okey'/>
      </div>

      <div className="">
        <h4 className="font-bold text-sm">{item.title}</h4>
        <p className="text-xs text-gray-500">{item.timeDescription}</p>
      </div>
    </section>
  );
};

export default OverviewBlock;