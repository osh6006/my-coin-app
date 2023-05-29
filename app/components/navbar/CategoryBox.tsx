"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  isNew: boolean;
  selected: boolean;
  description: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  isNew,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // if (params?.get("category") === label) {
    //   delete updatedQuery.category;
    // }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);
  return (
    <div
      onClick={handleClick}
      className={`
    flex flex-col items-center justify-center gap-2 border-b-2 hover:text-sky-950 transition cursor-pointer
    ${selected ? "border-b-sky-950" : "border-transparent"}
    ${selected ? "text-sky-950" : "text-neutral-500"}
    `}
    >
      <Icon size={26} />
      <div className="hidden font-medium text-sm md:block">{label}</div>
    </div>
  );
};

export default CategoryBox;
