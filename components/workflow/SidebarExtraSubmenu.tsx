import useOutsideClick from '@/hooks/useOutsideClick';
import React, { Fragment } from 'react'
import Search from './Search';
import Link from 'next/link';
import Image from 'next/image';

const SidebarExtraSubmenu = ({ item, sidebarWidth, setSubmenuIndex, setClickedOutside } : SidebarExtraSubmenuProps) => {
  const submenuRef = useOutsideClick<HTMLDivElement>(() => {
    setSubmenuIndex(-1)
    setClickedOutside(true)
  });
  
  return (
    <section 
      ref={submenuRef} 
      style={{ left: sidebarWidth - 80 + 'px' }} 
      className='absolute z-10 top-0 text-sm flex flex-col space-y-4 w-[384px] p-5 shadow-md border-[1px] bg-white border-gray-300'
    >   
      {item.submenu.length > 0 ? (
        <div className="flex flex-col space-y-3">
          <h2 className='font-semibold'>{item.represent.title}</h2>
          <Search />
          <p>Today</p>

          <div className='max-h-[400px] overflow-scroll'>
            {item.submenu.map((item) => (
              <Fragment key={item.route}>
                <Link href={item.route} className='flex items-center gap-2 hover:bg-gray-100 duration-300 p-2'>
                  <Image src={item.icon} width={16} height={16} alt="recent" />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.time}</p>
                  </div>
                </Link>
              </Fragment>            
            ))}
          </div>
          
          {item.represent.title === 'Recent' && (
            <>
              <div className='w-full h-[1px] bg-gray-300 my-3' />
              <Link href='/view-all' className='block w-full mt-2 p-2 hover:bg-gray-100'>
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
          <Image src={item.empty.icon} width={160} height={160} alt="recent" className='flex-1' />

          <div className='flex flex-col items-center text-center px-5'>
            <p className='font-semibold pb-2'>{item.empty.title}</p>
            <p>{item.empty.description}</p>
          </div>
        </div>
      )}  
    </section>
  );
};

export default SidebarExtraSubmenu;