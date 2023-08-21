"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { Button } from "@/components";
import { useEffect, useState } from "react";

const ShowMore = ({ pageNumber, isNext, pageLimit, total }: ShowMoreProps) => {
  const [more, setMore] = useState(false);

  const router = useRouter();

  const handleNavigation = () => {
    if (more) {
      setMore(false);
      const newPathname = updateSearchParams("count_per_page", "12");
      router.push(newPathname);
    } else {
      setMore(true);
      const newPathname = updateSearchParams("count_per_page", "100");
      router.push(newPathname);
    }
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      <Button
        btnType="button"
        title="Next"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    </div>
  );
};

export default ShowMore;
