"use client";

import React, { useState, useCallback } from 'react';
import { useSidebar } from './SidebarContext';
import SidebarItemsWithMenu from './SidebarItemsWithMenu';
import SidebarItemsWithDropdown from './SidebarItemsWithDropdown';

type LinkItem = {
  type: "link";
  ref: string;
  icon: string;
  title: string;
  size?: number;
};

type ButtonItem = {
  type: "btn";
  ref?: never; 
  icon: string;
  title: string;
  size?: number;
};

type Item = LinkItem | ButtonItem;

const contextMenuProjectLinks: Item[] = [
  {
    type: 'link',
    ref: 'https://asr-miniproj-team7.atlassian.net/jira/settings/projects/manage?page=1&sortKey=name&sortOrder=ASC',
    icon: '/svg/settings.svg',
    title: 'Manage project'
  },
  {
    type: 'btn',
    icon: '/svg/user.svg',
    title: 'Hide from sidebar'
  },
]

const contextMenuAppsLinks: Item[] = [
  {
    type: 'btn',
    icon: '/svg/user.svg',
    title: 'Hide from sidebar'
  },
]

export const sidebarProjectDropdown = [
  {
    mainTitle: 'Recent',
    itemIcon: '/svg/project.svg',
    itemRef: '/',
    itemTitle: 'Сервіс залізничної компанії',
    submenu: true,
  },
  {
    mainTitle: 'Recommended',
    itemIcon: '/svg/project.svg',
    itemRef: '/',
    itemTitle: 'Go-to-market sample',
  },
];

export const sidebarAppsDropdown = [
  {
    itemIcon: '/svg/squares-plus.svg',
    itemRef: '/apps',
    itemTitle: 'Explore more apps',
  },
];

const SIDEBAR_MIN_WIDTH = 220;
const SIDEBAR_MAX_WIDTH = 400;

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const { isOpen } = useSidebar();

  const handleResize = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = startWidth + (e.clientX - startX);
      if (newWidth >= SIDEBAR_MIN_WIDTH && newWidth <= SIDEBAR_MAX_WIDTH) {
        setSidebarWidth(newWidth);
      }
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [sidebarWidth]);

  if (!isOpen) return null;

  return (
    <aside className="flex sticky left-0 top-[48px] select-none h-[calc(100vh-48px)]">
      <nav
        style={{ width: sidebarWidth }}
        className="sticky left-0 top-[48px] flex flex-col bg-white border-r border-gray-200 pt-20 max-lg:hidden sm:p-4 xl:p-6"
      >
        <ul>          
          <SidebarItemsWithMenu sidebarWidth={sidebarWidth} />

          <SidebarItemsWithDropdown 
            title="Projects"
            icon='/svg/rocket.svg'
            add={true}
            contextMenuLinks={contextMenuProjectLinks}
            sidebarDropdown={sidebarProjectDropdown}
          />

          <SidebarItemsWithDropdown 
            title="Apps"
            icon='/svg/squares-plus.svg'
            add={false}
            contextMenuLinks={contextMenuAppsLinks}
            sidebarDropdown={sidebarAppsDropdown}
          />
        </ul>
      </nav>

      {/* Resize Handler */}
      <div className="w-1 cursor-ew-resize bg-gray-100" onMouseDown={handleResize} />
    </aside>
  );
};

export default Sidebar;