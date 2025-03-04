import Image from 'next/image'
import React from 'react'

const SidebarSectionRepresent = ({ item: { icon, title, size = 18}, className }: { item: { icon: string, title: string, size?: number }, className?: string}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src={icon} width={size} height={size} alt={title} />
      <span className='text-nowrap truncate flex-1 text-left'>{title}</span>
    </div>
  );
};

export default SidebarSectionRepresent;