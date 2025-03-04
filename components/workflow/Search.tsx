"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (term: string) => {
    
  }

  return (
    <section className="relative w-full">
      <div className="h-full w-[20px] absolute top-0 left-[2px] flex items-center">
        <MagnifyingGlassIcon width={24} height={24} className="focus text-gray-400" />
      </div>

      <div className='w-full'>
        <input
          type="text" 
          placeholder="Search"
          className="bg-gray-100 px-8 py-2 rounded-md w-full h-fit outline-none"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchTerm}
        />
      </div>
    </section>
  )
}

export default Search