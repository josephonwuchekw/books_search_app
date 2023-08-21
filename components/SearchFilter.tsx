"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { filters } from "@/constants";

// replace manufacturers with recent queries
import { SearchFilterProps } from "@/types";

const SearchFilter = ({ filter, setFilter }: SearchFilterProps) => {
  const [q, setQ] = useState("");

  const filteredFilters =
    q === ""
      ? filters
      : filters.filter((item: string) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(q.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-book">
      <Combobox value={filter} onChange={setFilter}>
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/arrow-down.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className="search-book__input"
            displayValue={(item: string) => item}
            onChange={(event) => {
              setQ(event.target.value);
              // setRecentQueries(event.target.value);
            }} // Update the search query when the input changes
            placeholder="Filter..."
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQ("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredFilters && filteredFilters.length !== 0 && q !== "" ? (
                <Combobox.Option value={q} className="search-book__option">
                  {q}
                </Combobox.Option>
              ) : (
                filteredFilters?.map((item: string) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-book__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchFilter;
