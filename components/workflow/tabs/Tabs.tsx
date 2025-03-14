"use client"

import { useState } from "react";
import Tab from "./Tab";
import TabContextMenu from "./TabContextMenu";
import { usePathname } from "next/navigation";
import TabDefault from "./TabDefault";
// import { tabsLinks } from "@/constants/constants";

export const tabsLinks = [
  { 
    icon: '/svg/globe.svg', 
    title: 'Summary', 
    route: '/projects'
  }, 
  {
    icon: '/svg/recent.svg', 
    title: 'Timeline', 
    route: '/timeline'
  }, 
  { 
    icon: '/svg/backlog.svg', 
    title: 'Backlog', 
    route: '/backlog'
  },
  { 
    icon: '/svg/stack.svg', 
    title: 'Board', 
    route: '/board'
  },
  { 
    icon: '/svg/calendar.svg', 
    title: 'Calendar', 
    route: '/calendar'
  },
  { 
    icon: '/svg/trending.svg', 
    title: 'Reports', 
    route: '/reports'
  },
  { 
    icon: '/svg/aim.svg', 
    title: 'Goals', 
    route: '/goals'
  },
];

const Tabs = () => {
  const pathname = usePathname()

  const [tabs, setTabs] = useState(tabsLinks)
  const [tabContextMenuIndex, setTabContextMenuIndex] = useState(-1)

  const handleOnMoveRight = (index: number) => {
    setTabs(prevTabs => {
      const newTabs = [...prevTabs];
      if (index < newTabs.length - 1) {
        [newTabs[index], newTabs[index + 1]] = [newTabs[index + 1], newTabs[index]];
      }
      return [...newTabs]; 
    });
    setTabContextMenuIndex(-1)
  };  

  const handleOnMoveLeft = (index: number) => {
    setTabs(prevTabs => {
      const newTabs = [...prevTabs]; 
      if (index > 0) {  
        [newTabs[index - 1], newTabs[index]] = [newTabs[index], newTabs[index - 1]];
      }
      return [...newTabs]; 
    });
    setTabContextMenuIndex(-1)

  };

  const handleRemove = (index: number) => {
    setTabs(prevTabs => {
      const newTabs = [...prevTabs];
      newTabs.splice(index, 1);
      return [...newTabs];
    });
    setTabContextMenuIndex(-1)
  };

  const sizeDisappeared = (index: number) => {
    const breakpoints = ['max-xl:hidden', 'max-lg:hidden', 'max-md:hidden', 'max-sm:hidden'];
    const position = tabs.length - index - 1; 
    return breakpoints[position] || '';
  };
  
  return (
    <article className="relative w-full flex gap-3 border-b-2 border-gray-300 px-10">
      <ul className="flex gap-5">
        {tabs.map((tab, index) => {
          const isActive = pathname === tab.route || pathname.startsWith(`${tab.route}/`);
          const screen = sizeDisappeared(index);

          return (
            <li key={tab.title} className={`relative ${screen}`}>
              <Tab 
                tab={tab} 
                index={index} 
                isSelected={isActive}
                tabContextMenuIndex={tabContextMenuIndex} 
                setTabContextMenuIndex={setTabContextMenuIndex} 
              />
              
              {tabContextMenuIndex === index && (
                <TabContextMenu 
                  index={index} 
                  tabs={tabs}  
                  key={tabs[index].title} 
                  title={tabs[index].title} 
                  tabContextMenuIndex={tabContextMenuIndex} 
                  handleOnMoveLeft={handleOnMoveLeft} 
                  handleOnMoveRight={handleOnMoveRight} 
                  handleRemove={handleRemove}  
                />
              )}
            </li>
          )
        })}

        <TabDefault tabs={tabs} totalTabs={tabs.length} />
      </ul>
    </article>
  );
};

export default Tabs;