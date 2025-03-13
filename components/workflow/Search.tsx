"use client";

import React, { useState, useEffect } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import SearchResult from './SearchResult';

interface SearchProps {
  placeholder?: string, 
  setSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>, 
  className?: string 
}

const Search = ({ 
  placeholder = "Search",  
  setSearchOpen, 
  className 
}: SearchProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") || "");

  useEffect(() => {
    setSearchTerm(searchParams.get("query") || "");
  }, [searchParams]);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  return (
    <section className="relative w-full">
      <div className="h-full w-[20px] absolute top-0 left-[6px] flex items-center">
        <MagnifyingGlassIcon width={24} height={24} className="focus text-gray-400 w-[24px] h-[24px]" />
      </div>

      <div className='w-full'>
        <input
          type="text" 
          placeholder={placeholder}
          className={`border-[1px] border-gray-300 px-8 py-2 rounded-md w-full h-fit outline-none text-ellipsis ${className}`}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setSearchOpen && setSearchOpen(true)}
          onBlur={() => setSearchOpen && setSearchOpen(false)}
          defaultValue={searchTerm}
        />

        <SearchResult />
      </div>
    </section>
  );
};

export default Search;