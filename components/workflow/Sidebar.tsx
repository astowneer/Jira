"use client";

import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import SidebarDropdown from './SidebarDropdown';
import useOutsideClick from '@/hooks/useOutsideClick';
import { sidebarDropdown, sidebarExtraItems } from '@/constants/constants';
import SidebarExtraSubmenu from './SidebarExtraSubmenu';
import SidebarExtra from './SidebarExtra';
import SidebarSectionRepresent from './SidebarSectionRepresent';

const SIDEBAR_MIN_WIDTH = 220;
const SIDEBAR_MAX_WIDTH = 400;

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(-1);
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false)

  
  const [projectState, setProjectState] = useState({
    visible: true,
    dropdownVisible: false,
    showMore: false,
  });

  const [appState, setAppState] = useState({
    visible: true,
    seeMore: false,
    expanded: false,
  });

  const handleSetSubmenuIndex = (index: number) => {
    setSubmenuIndex(index)
  }

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => setProjectState((prev) => ({ ...prev, showMore: false })));
  const submenuRef = useOutsideClick<HTMLDivElement>(() => setAppState((prev) => ({ ...prev, seeMore: false })));

  const handleResize = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      if (newWidth >= SIDEBAR_MIN_WIDTH && newWidth <= SIDEBAR_MAX_WIDTH) {
        setSidebarWidth(newWidth);
      }
    };

    const onMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [sidebarWidth]);


  const handleSidebarExtraClicked = (index: number) => {
    if (clickedOutside) {
      setClickedOutside(false)
      return
    }
    setSubmenuIndex1((prev) => prev === index ? -1 : index)
  }

  const [submenuIndex1, setSubmenuIndex1] = useState<number>(-1)
  return (
    <aside className="flex h-screen sticky left-0 top-[48px] select-none">
      <nav
        style={{ width: sidebarWidth }}
        className="sticky left-0 top-[48px] flex flex-col bg-white h-screen border-r border-gray-200 pt-20 max-md:hidden sm:p-4 xl:p-6"
      >
        <ul>          
          {sidebarExtraItems.map((item, index) => (
            <div className='relative' key={index}>
              <SidebarExtra 
                item={item.represent} 
                index={index} 
                onClick={() => handleSidebarExtraClicked(index)}  
              />

              {index === submenuIndex1 && (
                <SidebarExtraSubmenu 
                  item={sidebarExtraItems[index]} 
                  sidebarWidth={sidebarWidth} 
                  setSubmenuIndex={setSubmenuIndex1} 
                  setClickedOutside={setClickedOutside} 
                />
              )}
            </div>
          ))}

          {/* Project Section */}
          {projectState.visible && (
            <>
              <li className="p-2 flex justify-between bg-white hover:bg-gray-200 cursor-pointer" onClick={() => setProjectState((prev) => ({ ...prev, dropdownVisible: !prev.dropdownVisible }))}>
                <SidebarSectionRepresent item={{ icon: '/svg/rocket.svg', title: 'Projects' }} />

                <div className="flex gap-2">
                  <button className="hover:bg-gray-300 p-1" onClick={() => setProjectState((prev) => ({ ...prev, dropdownVisible: !prev.dropdownVisible }))}>
                    <Image src="/svg/plus.svg" width={18} height={18} alt="Add Project" />
                  </button>

                  <div className='relative'>
                    <button
                      className='hover:bg-gray-300 p-1 w-full'  
                      onClick={() => setProjectState((prev) => ({ ...prev, dropdownVisible: !prev.dropdownVisible, showMore: !prev.showMore }))}
                    >
                      <Image src='/svg/more.svg' width={18} height={18} alt="see more" />
                    </button>

                    {projectState.showMore && (
                      <div className='absolute min-w-[200px] bg-white text-black shadow-md border-[1px] text-xs border-gray-200 p-2 z-10' ref={dropdownRef}>
                        <Link 
                          href='/manage-project' 
                          onClick={() => setProjectState((prev) => ({ ...prev, dropdownVisible: false }))}
                        >
                          <SidebarSectionRepresent item={{ icon: '/svg/settings.svg', title: 'Manage project', size: 16 }} className='flex items-center gap-2 p-2 hover:bg-gray-200' />
                        </Link>

                        <button 
                          className='w-full'
                          onClick={() => setProjectState({ visible: false, dropdownVisible: false, showMore: false })}
                        >
                          <SidebarSectionRepresent item={{ icon: '/svg/user.svg', title: 'Hide from sidebar', size: 16 }} className='flex items-center gap-2 p-2 hover:bg-gray-200' />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </li>

              {projectState.dropdownVisible && (
                <div className="pl-5 flex flex-col gap-2">
                  {sidebarDropdown.map((item) => (
                    <SidebarDropdown key={item.itemTitle} item={item} />
                  ))}

                  <Link href="/explore-more" className="flex gap-2 hover:bg-gray-300 p-2">
                    <Image src="/svg/recent.svg" width={16} height={16} alt="View All Projects" />
                    <span className="text-nowrap truncate">View All Projects</span>
                  </Link>
                </div>
              )}
            </>
          )}

          {/* Apps Section */}
          {appState.visible && (
            <>
              <li className="p-2 flex justify-between bg-white hover:bg-gray-200 cursor-pointer" onClick={() => setAppState((prev) => ({ ...prev, expanded: !prev.expanded }))}>
                <SidebarSectionRepresent item={{ icon: '/svg/squares-plus.svg', title: 'Apps' }} />
                <button
                  className="hover:bg-gray-300 p-1 relative"
                  onClick={() => setAppState((prev) => ({ ...prev, seeMore: !prev.seeMore, expanded: !prev.expanded }))}
                >
                  <Image src="/svg/more.svg" width={18} height={18} alt="More Options" />
                  {appState.seeMore && (
                    <div ref={submenuRef} className="absolute min-w-[200px] text-xs bg-white shadow-md border p-2 top-8">
                      <div onClick={() => setAppState({ visible: false, seeMore: false, expanded: false })}>
                        {/* <SidebarAdition item={{ icon: '/svg/user.svg', title: 'Hide from Sidebar' }} /> */}
                        <SidebarSectionRepresent item={{ icon: '/svg/user.svg', title: 'Hide from Sidebar', size: 16 }} className='hover:bg-gray-200 p-2 text-xs' />
                      </div>
                    </div>
                  )}
                </button>
              </li>

              {appState.expanded && (
                <div className="pl-5 flex flex-col gap-2">
                  <Link href="/explore-more" className="flex gap-2 hover:bg-gray-200 p-2 flex-col">
                    <SidebarSectionRepresent item={{ icon: '/svg/squares-plus.svg', title: 'Explore More', size: 16 }} />
                  </Link>
                </div>
              )}
            </>
          )}

        </ul>
      </nav>

      {/* Resize Handler */}
      <div className="w-1 cursor-ew-resize bg-gray-100" onMouseDown={handleResize} />
    </aside>
  );
};

export default Sidebar;