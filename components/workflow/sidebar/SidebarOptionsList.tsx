import React, { SetStateAction } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Search from '../Search';
import useOutsideClick from '@/hooks/useOutsideClick';

declare type SidebarExtraSubmenuType = {
  represent: {
    title: string,
    icon: string,
  },
  submenu: SidbarSubmenu[],
  empty: {
    icon: string,
    title: string,
    description: string
  }
}

interface SidebarOptionsList {
  setMenuListIndex: React.Dispatch<SetStateAction<number>>, 
  menuListIndex: number, 
  sidebarWidth: number, 
  item: SidebarExtraSubmenuType
}

const SidebarOptionsList = ({ 
  item, 
  sidebarWidth, 
  setMenuListIndex, 
  menuListIndex 
}: SidebarOptionsList) => {
  const submenuRef = useOutsideClick<HTMLLIElement>(() => {
    setTimeout(() => {
      setMenuListIndex((prev) => (prev === menuListIndex ? -1 : prev));
    }, 200)
  });

  return (
    <section 
      ref={submenuRef} 
      style={{ left: sidebarWidth - 80 + 'px' }} 
      className='absolute z-10 top-0 text-xs flex flex-col space-y-4 w-[320px] p-5 shadow-md border-[1px] bg-white border-gray-300'
    >   
      {item.submenu.length > 0 ? (
        <div className="flex flex-col space-y-3">
          <h2 className='font-semibold'>{item.represent.title}</h2>
          <Search />
          <p>Today</p>

          <div className='max-h-[400px] overflow-scroll'>
            {item.submenu.map((sItem) => (
              <Link key={sItem.route} href={sItem.route} className='flex items-center gap-2 hover:bg-gray-100 duration-300 p-1'>
                <Image src={sItem.icon} width={16} height={16} alt="recent" />

                <div>
                  <h3>{sItem.title}</h3>
                  <p>{sItem.time}</p>
                </div>
              </Link>          
            ))}
          </div>
          
          {item.represent.title === 'Recent' && (
            <>
              <div className='w-full h-[1px] bg-gray-300 my-1' />
              <Link href='/view-all' className='block w-full p-1 hover:bg-gray-100'>
                <div className='flex gap-2'>
                  <Image src='/svg/list.svg' width={16} height={16} alt="recent" />
                  <span>View all recent items</span>
                </div>
              </Link>
            </>
          )}
        </div>
      ): (
        <div className='flex flex-col items-center gap-3 min-h-[330px] py-8'>
          <Image src={item.empty.icon} width={160} height={160} alt={item.empty.title} className='flex-1' />

          <div className='flex flex-col items-center text-center px-5'>
            <p className='font-semibold pb-2'>{item.empty.title}</p>
            <p>{item.empty.description}</p>
          </div>
        </div>
      )}  
    </section>
  );
};

export default SidebarOptionsList;