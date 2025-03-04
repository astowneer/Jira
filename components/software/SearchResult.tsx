"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchSuggestionList } from "@/constants/constants";

const MAX_SUGGESTIONS = 8;

const SearchResult = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("query");
  const [searchSuggestions, setSearchSuggestions] = useState<SuggestedQuery[]>([]);

  useEffect(() => {
    const handleSearch = () => {
      if (!searchQuery) {
        setSearchSuggestions([]); 
        return;
      }

      const filteredResults = searchSuggestionList
        .filter((suggestion) =>
          suggestion.query.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, MAX_SUGGESTIONS); 

      setSearchSuggestions(filteredResults);
    };

    handleSearch();
  }, [searchQuery]); 

  return (
    <>
      {searchQuery && searchSuggestions.length > 0 && (
        <ul className="max-w-[550px] w-full absolute top-[48px] left-0 border p-6 bg-white shadow-xl rounded-2xl">
          {searchSuggestions.map((suggestion, index) => (
            <li key={index} className="hover:bg-gray-100 px-4 py-2 rounded-md">
              <Link href={suggestion.route} className="block truncate text-md">
                {suggestion.query}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchResult;
