"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { sidebarExtraItems } from "@/constants/constants";

const MAX_SUGGESTIONS = 8;

type Submenu = {
  icon: string;
  title: string;
  route: string;
  time: string;
}

const SidebarSearchResult = ({ searchQuery }: { searchQuery: string }) => {
  const [searchSuggestions, setSearchSuggestions] = useState<Submenu[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchSuggestions([]);
      return;
    }

    const filteredResults = sidebarExtraItems[0].submenu.filter(
      (item) => item.title.toLowerCase().includes(searchQuery)
    ).slice(0, MAX_SUGGESTIONS)
     
    setSearchSuggestions(filteredResults);
  }, [searchQuery]);

  if (!searchQuery) return null;

  return (
    <>
     {searchSuggestions.map((item) => 
        <Link key={item.route} href={item.route} className='flex items-center gap-2 hover:bg-gray-100 duration-300 p-1'>
          <Image src={item.icon} width={16} height={16} alt="recent" />

          <div>
            <h3>{item.title}</h3>
            <p>{item.time}</p>
          </div>
        </Link> 
      )}
    </>
  );
};

export default SidebarSearchResult;
