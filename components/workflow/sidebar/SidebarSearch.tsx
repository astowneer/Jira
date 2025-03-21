"use client";

import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { SetStateAction } from 'react';

interface SearchProps {
  searchTerm: string,
  setSearchTerm: React.Dispatch<SetStateAction<string>>,
  placeholder?: string
}

const SidebarSearch = ({ 
  searchTerm,
  setSearchTerm,
  placeholder="Search"
}: SearchProps) => {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="relative w-full">
      <div className="h-full w-[20px] absolute top-0 left-[6px] flex items-center">
        <MagnifyingGlassIcon width={24} height={24} className="focus text-gray-400 w-[24px] h-[24px]" />
      </div>

      <div className='w-full'>
        <input
          type="text" 
          placeholder={placeholder}
          className={`border-[1px] border-gray-300 px-8 py-2 rounded-md w-full h-fit outline-none text-ellipsis`}
          onChange={(e) => setSearchTerm(e.target.value)}
          defaultValue={searchTerm}
        />
      </div>
    </section>
  );
};

export default SidebarSearch;