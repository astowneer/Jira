import Link from 'next/link'
import React from 'react'

type OverviewTextWithLink = {
  description: string;
  descriptionRef?: string;
  ref?: string;
}

const OverviewTextWithLink = ({ item, className }: { item: OverviewTextWithLink, className?: string }) => {
  return (
    <p className={`text-xs ${className}`}>
      {item.description}&nbsp; 
      {item.descriptionRef && 
        <Link 
          href={item.ref ?? '/'}
          className="text-blue-600 hover:underline"
        >
          {item.descriptionRef}
        </Link>
      }
    </p>
  );
};

export default OverviewTextWithLink;