"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { SearchQuery } from ".";
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

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === "" && filter.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(filter.toLowerCase(), query.toLowerCase());
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

  // Save recent queries
  useEffect(() => {
    setRecentQueries(query);
  }, [query]);

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchQuery query={query} setQuery={setQuery} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <SearchFilter filter={filter} setFilter={setFilter} />
        {/* <SearchButton otherClasses="sm:hidden" /> */}
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
