"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'

const Search = ({ placeholder = "Search",  setSearchOpen, className }: { placeholder?: string, setSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>, className?: string }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    
  }

  return (
    <section className="relative w-full">
      <div className="h-full w-[20px] absolute top-0 left-[6px] flex items-center">
        <MagnifyingGlassIcon width={24} height={24} className="focus text-gray-400 w-[24px] h-[24px]" />
      </div>

      <div className='w-full'>
        <input
          type="text" 
          placeholder={placeholder}
          className={`bg-gray-100 px-8 py-2 rounded-md w-full h-fit outline-none text-ellipsis ${className}`}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setSearchOpen && setSearchOpen(true)}
          onBlur={() => setSearchOpen && setSearchOpen(false)}
          defaultValue={searchTerm}
        />
      </div>
    </section>
  );
};

export default Search;