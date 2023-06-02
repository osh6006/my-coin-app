import { SafeUser } from "@/app/Types";
import React from "react";
import HeartButton from "../HeartButton";

interface CoinNewsCardProps {
  currentUser?: SafeUser | null;
  imgUrl: string;
  name: string;
  url: string;
  categories: string;
  tags: string;
  rank: number;
  newsId: string;
}

export const CoinNewsCard = ({ imgUrl, name, url, categories, tags, rank, currentUser, newsId }: CoinNewsCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mx-1 block cursor-pointer rounded-lg overflow-hidden bg-secondaryBg px-2 py-10 duration-300 hover:scale-105 shadow-md "
    >
      <div className="flex flex-col items-center justify-between group-hover:opacity-10 ">
        <div
          className="absolute top-0 h-36 w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${imgUrl}")`,
          }}
        />
        <h2 className="mt-28 text-xl font-bold">{name?.length > 50 ? `${name?.slice(0, 50)}...` : name}</h2>
      </div>
      <div className="mt-2 flex flex-wrap gap-3 group-hover:opacity-10">
        <div className="flex flex-wrap gap-2 text-sm">
          {tags.split("|").map((el, i) => (
            <div
              key={i}
              className="whitespace-nowrap px-2 rounded-2xl border font-bold text-xs border-green-600 py-1 text-green-600"
            >
              {el}
            </div>
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-2 text-sm">
          {categories.split("|").map((el, i) => (
            <div key={i} className=" rounded-2xl border border-green-300 p-1 text-green-300">
              {el}
            </div>
          ))}
        </div> */}
      </div>
      <div className="absolute left-2 top-2 text-xl">{rank}</div>
      <div className="absolute top-3 right-2 ">
        <HeartButton coinId={newsId} currentUser={currentUser} type="news" />
      </div>
    </a>
  );
};
