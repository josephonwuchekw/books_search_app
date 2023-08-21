"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { SearchFilter } from ".";
import useLocalStorage from "@/hooks/useLocalStorage";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [recentQueries, setRecentQueries] = useLocalStorage(
    "recent_queries",
    []
  );

  console.log("SearchQuery:", query);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === "" && filter.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(filter.toLowerCase(), query.toLowerCase());
    setRecentQueries(query.toLowerCase());
  };

  const updateSearchParams = (filter: string, query: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'filter' search parameter based on the 'filter' value
    if (filter) {
      searchParams.set("filter", filter);
    } else {
      searchParams.delete("filter");
    }

    // Update or delete the 'query' search parameter based on the 'query' value
    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <>
      <div className="w-full flex flex-wrap gap-3 items-center">
        <span>Recently searched:</span>
        {recentQueries.map((r_query: string) => (
          <span
            onClick={() => {
              setQuery(r_query);
            }}
            key={r_query}
            className="bg-primary-blue text-white rounded-full p-3"
          >
            {r_query}
          </span>
        ))}
      </div>
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <Image
            src="/chevron-up-down.svg"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="book query"
          />
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className="searchbar__item">
          <SearchFilter filter={filter} setFilter={setFilter} />
          {/* <SearchButton otherClasses="sm:hidden" /> */}
        </div>

        <SearchButton otherClasses="max-sm:hidden" />
      </form>
    </>
  );
};

export default SearchBar;
