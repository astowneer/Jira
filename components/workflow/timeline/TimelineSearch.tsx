"use client";

import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import TimelineSearchResult from './TimelineSearchResult';

export const timelineGroups = [
  {
    id: 0, 
    title: '' 
  },
  { 
    id: 1,
    title: 'Vision/Scope, бізнес-вимоги та користувацькі історії' 
  }, 
  {
    id: 2, 
    title: 'Обробити користувацькі історії' 
  },
  {
    id: 3, 
    title: 'Сформувати список функцій, характеристик та/або вимог до продукту' 
  },
  {
    id: 4, 
    title: 'Сформувати базові варіанти використання' 
  },
  {
    id: 5, 
    title: 'Матриці перекриття конфліктів' 
  },
];

interface SearchProps {
  placeholder?: string,
  setSearchOpen?: React.Dispatch<React.SetStateAction<boolean>>, 
  className?: string 
}

const TimelineSearch = ({ 
  placeholder = "Search",
  setSearchOpen,
  className 
}: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

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
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setSearchOpen && setSearchOpen(true)}
          onBlur={() => setSearchOpen && setSearchOpen(false)}
          defaultValue={searchTerm}
        />
      </div>

      <TimelineSearchResult searchQuery={searchTerm} />
    </section>
  );
};

export default TimelineSearch;