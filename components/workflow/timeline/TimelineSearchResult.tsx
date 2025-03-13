"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { timelineGroups } from "@/constants/constants";

const MAX_SUGGESTIONS = 8;

type TimelineResult = {
  title: string
}

const TimelineSearchResult = ({ searchQuery }: { searchQuery: string }) => {
  const [searchSuggestions, setSearchSuggestions] = useState<TimelineResult[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchSuggestions([]);
      return;
    }

    const filteredResults = timelineGroups.filter(
      (item) => item.title.toLowerCase().includes(searchQuery)
    ).slice(0, MAX_SUGGESTIONS)
     
    setSearchSuggestions(filteredResults);
  }, [searchQuery]);

  if (!searchQuery) return null;

  return (
    <div className="absolute top-[48px] left-0 min-w-[280px] w-full border p-3 bg-white shadow-xl rounded-md text-sm z-30 ">
      {searchSuggestions.length > 0 ? (
        <ul >
          {searchSuggestions.map(({ title }) => (
            <li key={title} className="text-ellipsis hover:bg-gray-100 p-2">{title}</li>
          ))}
        </ul>
      ) : (
        <p>
          Nothing found for <span className="font-semibold">{searchQuery}</span>
        </p>
      )}
    </div>
  );
};

export default TimelineSearchResult;
