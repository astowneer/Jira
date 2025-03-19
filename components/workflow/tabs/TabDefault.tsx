// "use client"

// import useOutsideClick from "@/hooks/useOutsideClick";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// type Tab = {
//   icon: string;
//   title: string;
//   route: string;
// }

// const breakpoints = {
//   xl: 1280,
//   lg: 1024,
//   md: 768,
//   sm: 640,
// };

// const TabDefault = ({ tabs, totalTabs }: { totalTabs: number, tabs: Tab[] }) => {
//   const [hiddenTabs, setHiddenTabs] = useState(tabs)
//   const [hiddenTabsContextMenuOpen, setHiddenTabsContextMenuOpen] = useState(false)
//   const [hiddenTabsCount, setHiddenTabsCount] = useState(0);

//   const tabRef = useOutsideClick<HTMLLIElement>(() => {
//     setHiddenTabsContextMenuOpen(false);
//   });

//   useEffect(() => {
//     const calculateHiddenTabs = () => {
//       const width = window.innerWidth;
//       let visibleTabs = totalTabs;

//       if (width < breakpoints.sm) {
//         visibleTabs = Math.max(totalTabs - 4, 0);
//       } else if (width < breakpoints.md) {
//         visibleTabs = Math.max(totalTabs - 3, 0);
//       } else if (width < breakpoints.lg) {
//         visibleTabs = Math.max(totalTabs - 2, 0);
//       } else if (width < breakpoints.xl) {
//         visibleTabs = Math.max(totalTabs - 1, 0);
//       }

//       setHiddenTabsCount(totalTabs - visibleTabs);
//     };

//     calculateHiddenTabs();
//     window.addEventListener("resize", calculateHiddenTabs);

//     return () => window.removeEventListener("resize", calculateHiddenTabs);
//   }, [totalTabs]);

//   useEffect(() => {
//     const newTabs = tabs.slice(totalTabs - hiddenTabsCount);
//     setHiddenTabs(newTabs)
//   }, [hiddenTabsCount])
  
//   if (hiddenTabsCount === 0) return null; 

//   return (
//     <li ref={tabRef} className="relative flex items-center gap-1 group pb-2 select-none" onClick={() => setHiddenTabsContextMenuOpen((prev) => !prev)}>
//       <p className="font-medium text-sm text-gray-700 group-hover:text-blue-500">
//         More 
//         <span className='ml-2 text-xs bg-gray-200 py-[1px] rounded-md px-2 text-gray-500 group-hover:text-gray-500'>
//           {hiddenTabsCount}
//         </span>
//       </p>
//       <span className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-blue-500 hidden group-hover:block rounded-4xl"/>
      
//       {hiddenTabsContextMenuOpen && 
//         <section className='bg-white px-3 py-2 absolute top-11 flex flex-col border-[1px] border-gray-200 text-xs z-10'>
//           {hiddenTabs.map((item) => (
//             <Link 
//               href={item.route} 
//               key={item.title} 
//               className="w-full p-2 hover:bg-gray-200 text-left"
//             >
//               {item.title}
//             </Link>
//           ))}
//         </section>
//       }
//     </li>
//   );
// };

// export default TabDefault;

import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useEffect, useState } from "react";

type Tab = {
  icon: string;
  title: string;
  route: string;
}

const breakpoints = {
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
};

const TabDefault = ({ tabs, totalTabs }: { totalTabs: number, tabs: Tab[] }) => {
  const [hiddenTabs, setHiddenTabs] = useState(tabs);
  const [hiddenTabsContextMenuOpen, setHiddenTabsContextMenuOpen] = useState(false);
  const [hiddenTabsCount, setHiddenTabsCount] = useState(0);

  const tabRef = useOutsideClick<HTMLLIElement>(() => {
    setHiddenTabsContextMenuOpen(false);
  });

  useEffect(() => {
    const calculateHiddenTabs = () => {
      const width = window.innerWidth;
      let visibleTabs = totalTabs;

      if (width < breakpoints.sm) {
        visibleTabs = Math.max(totalTabs - 4, 0);
      } else if (width < breakpoints.md) {
        visibleTabs = Math.max(totalTabs - 3, 0);
      } else if (width < breakpoints.lg) {
        visibleTabs = Math.max(totalTabs - 2, 0);
      } else if (width < breakpoints.xl) {
        visibleTabs = Math.max(totalTabs - 1, 0);
      }

      setHiddenTabsCount(totalTabs - visibleTabs);
    };

    calculateHiddenTabs();
    window.addEventListener("resize", calculateHiddenTabs);

    return () => window.removeEventListener("resize", calculateHiddenTabs);
  }, [totalTabs]); // Added 'totalTabs' as a dependency

  useEffect(() => {
    const newTabs = tabs.slice(totalTabs - hiddenTabsCount);
    setHiddenTabs(newTabs);
  }, [hiddenTabsCount, tabs, totalTabs]); // Added 'tabs' and 'totalTabs' as dependencies

  if (hiddenTabsCount === 0) return null;

  return (
    <li ref={tabRef} className="relative flex items-center gap-1 group pb-2 select-none" onClick={() => setHiddenTabsContextMenuOpen((prev) => !prev)}>
      <p className="font-medium text-sm text-gray-700 group-hover:text-blue-500">
        More 
        <span className='ml-2 text-xs bg-gray-200 py-[1px] rounded-md px-2 text-gray-500 group-hover:text-gray-500'>
          {hiddenTabsCount}
        </span>
      </p>
      <span className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-blue-500 hidden group-hover:block rounded-4xl"/>
      
      {hiddenTabsContextMenuOpen && 
        <section className='bg-white px-3 py-2 absolute top-11 flex flex-col border-[1px] border-gray-200 text-xs z-10'>
          {hiddenTabs.map((item) => (
            <Link 
              href={item.route} 
              key={item.title} 
              className="w-full p-2 hover:bg-gray-200 text-left"
            >
              {item.title}
            </Link>
          ))}
        </section>
      }
    </li>
  );
};

export default TabDefault;
