"use client";

import Link from "next/link";
import TabLink from "./TabLink";
import { useState } from "react";
import { usePathname } from "next/navigation";
import TabMore from "./TabMore";

const tabsLinks = [
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

  const [tabMoreSelectedIndex, setTabMoreSelectedIndex] = useState(-1)
  const [tabs, setTabs] = useState(tabsLinks)

  const handleTabClick = (index: number) => {
    setTabMoreSelectedIndex(tabMoreSelectedIndex === index ? -1 : index);
  };

  return (
    <div className="border-b-2 border-gray-300 flex gap-3 relative w-full px-10">
      {tabs.map((link, index) => {
        const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
        
        return (
          <div className="relative" key={index}>
            <Link href={link.route} className="relative flex items-center gap-2 group pb-2">
              <TabLink 
                link={link} 
                isSelected={isActive} 
                index={index} 
                tabMoreSelectedIndex={tabMoreSelectedIndex} 
                setTabMoreOpenIndex={() => handleTabClick(index)} 
              />
            </Link>

            {tabMoreSelectedIndex === index && <TabMore tab={link} tabs={tabs} setTabs={setTabs} />}
          </div>
        )
      })}
    </div>
  );
};

export default Tabs;