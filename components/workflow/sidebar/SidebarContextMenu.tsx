import Image from 'next/image'
import { recentSidebarLinks } from '@/constants/constants';
import SidebarContextMenuAction from './SidebarContextMenuAction';

interface SidebarContextMenuProps {
  className?: string 
}

const SidebarContextMenu = ({ className }: SidebarContextMenuProps) => {
  return (
    <section className={`absolute left-44 min-w-max max-md:min-w-min flex flex-col space-y-1 max-md:text-xs text-sm p-2 shadow-lg bg-white border-gray-200 z-10 ${className}`}>
      {recentSidebarLinks.map((item) => (
        <SidebarContextMenuAction 
          key={item.title} 
          item={{ ...item, size: 16}} 
          className='flex items-center gap-2 p-2 max-sm:px-0 hover:bg-gray-200' 
        />
      ))}
      
      <div className='flex items-center gap-3 pt-5 text-sm max-sm:hidden px-2'>
        <div className="w-[38px] h-auto flex flex-shrink-0 max-md:hidden">
          <Image src="/images/jira.png" width={1200} height={814} alt="jira logo" />
        </div>

        <div className='flex flex-col text-gray-600 text-xs'>
          <p className='font-semibold'>Software project</p>
          <p>Team management</p>
        </div>
      </div>
    </section>
  );
};

export default SidebarContextMenu;