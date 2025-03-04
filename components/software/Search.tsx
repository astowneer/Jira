"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";
import SearchResult from "./SearchResult";
import { useState, useEffect } from "react";

const Search: React.FC<{ setSearchSelected: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setSearchSelected }) => {
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

  const handleSearchClose = () => {
    setSearchSelected(false);
    setSearchTerm("");
    replace(pathname, { scroll: false });
  }

  return (
    <div className="relative w-full pr-8">
      <div>
        <input 
          type="text" 
          placeholder="Search Keywords"
          className="bg-gray-100 pl-5 pr-12 py-2 rounded-3xl w-full outline-none"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchTerm}
        />

        <SearchResult />
      </div>
    
      <div className="h-full w-[20px] absolute top-0 right-[50px] flex items-center">
        <MagnifyingGlassIcon 
          width={24} 
          height={24} 
          className={cn("text-gray-300 focus", {
            "text-black" : searchTerm.trim()
          })}
          onClick={() => setSearchSelected((prev) => !prev)}
        />
      </div>

      <div className="flex h-full w-[20px] absolute top-0 right-0 items-center">
        <XMarkIcon 
          width={24} 
          height={24} 
          className="text-gray-500"
          onClick={() => handleSearchClose()}
        />
      </div>
    </div>
  );
};

export default Search;