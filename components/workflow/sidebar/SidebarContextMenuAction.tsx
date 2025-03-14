import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner';
import SidebarToast from './SidebarToast';

type SidebarContextMenuAction = {
  icon: string;
  title: string;
  size?: number;
  trash?: boolean;
}

interface SidebarContextMenuProps {
  item: SidebarContextMenuAction, 
  className?: string
}

const SidebarContextMenuAction = ({ item: { icon, title, size = 18, trash = false }, className }: SidebarContextMenuProps) => {
  return (
    <div 
      className={cn(`flex items-center gap-2 ${className}`, { "text-red-500" : trash })}
      onClick={() => toast.custom(() => <SidebarToast title={title} />)}
    >
      <Image 
        src={icon} 
        width={size} 
        height={size} 
        alt={title} 
        style={{ filter: trash ? "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)" : "" }} 
      />
      <span className='text-nowrap truncate flex-1 text-left'>{title}</span>
    </div>
  );
};

export default SidebarContextMenuAction;