"use client";

import Image from 'next/image'
import AccordeonItem from './AccordeonItem'
import { accordeonItems } from '@/constants/constants'
import { useState } from 'react';

const Accordeon = () => {
  const [itemIndexClicked, setItemIndexClicked] = useState<number>(-1);

  const handleOnClick = (index: number) => {
    setItemIndexClicked(index);
  }
  
  return (
    <section className="max-w-5xl w-full py-8">
      <h2 className="text-2xl lg:text-4xl font-bold text-center px-4">Made for complex projects or everyday tasks</h2>
      <div className="w-full py-8 2xl:grid grid-cols-2">
        <div className="grid-cols-1 w-full">
          {accordeonItems.map((item, index) => (
            <AccordeonItem 
              key={item.title} 
              isOpen={itemIndexClicked === index}
              title={item.title} 
              description={item.description} 
              imageUrl={item.imageUrl}
              onClick={() => handleOnClick(index)}
            />
          ))}
        </div>
        
        {itemIndexClicked >= 0 && (
          <div className="hidden 2xl:flex justify-center items-center">
            <Image 
              src={accordeonItems[itemIndexClicked].imageUrl}
              width={2669}
              height={2080}
              alt="collaborate"
              className="max-w-[600px] max-h-[468px] w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Accordeon;