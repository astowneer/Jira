import React from 'react'
import OverviewTextWithLink from './OverviewTextWithLink';

type OverviewHeader = {
  title: string;
  description: string;
  descriptionTextRef: string;
  descriptionRef: string;
}

const OverviewHeader = ({ item }: { item: OverviewHeader }) => {
  return (
    <header>
      <h3 className="font-bold text-sm">{item.title}</h3>
      
      <OverviewTextWithLink
        item={{ 
          description: item.description, 
          descriptionRef: item.descriptionTextRef,
          ref: item.descriptionRef 
        }} 
      />
    </header>
  );
};

export default OverviewHeader;