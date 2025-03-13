"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { backlogIssuesInitial } from "@/constants/constants";

const MAX_SUGGESTIONS = 8;

type BacklogIssue = {
  type: string;
  icon: string;
  filter: string;
  id: string;
  issuesText: string;
  status: string;
  storyPoints: string;
  assignedTo: {
    fullName: string;
    color: string;
  }[];
};

const SearchResult = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("query")?.toLowerCase() || "";
  const [searchSuggestions, setSearchSuggestions] = useState<BacklogIssue[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      setSearchSuggestions([]);
      return;
    }

    const filteredResults = backlogIssuesInitial
      .filter(({ issuesText, type, id }) =>
        [issuesText, type, id].some((field) => field.toLowerCase().includes(searchQuery))
      )
      .slice(0, MAX_SUGGESTIONS);

    setSearchSuggestions(filteredResults);
  }, [searchQuery]);

  if (!searchQuery) return null;

  return (
    <div className="absolute top-[48px] left-0 max-w-[550px] w-full border p-2 bg-white shadow-xl rounded-md text-sm">
      {searchSuggestions.length > 0 ? (
        <ul>
          {searchSuggestions.map(({ id, icon, filter, status, issuesText }) => (
            <li key={id} className="hover:bg-gray-100 px-3 py-2 rounded-md">
              <Link href={`/issues/${id}`} className="truncate text-md flex gap-2 items-center">
                <Image src={icon} width={16} height={16} alt={status} style={{ filter }} />
                <p className="truncate">{id}</p>
                <p className="truncate">{issuesText}</p>
              </Link>
            </li>
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

export default SearchResult;
