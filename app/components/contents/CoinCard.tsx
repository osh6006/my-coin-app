"use client";

import Image from "next/image";
import React from "react";

interface CoinCardProps {
  imgUrl: string;
  name: string;
  price: number;
  openDay: number;
  highDay: number;
  lowDay: number;
  rating: string;
  rank: number;
  toSymbol: string;
}

const CoinCard: React.FC<CoinCardProps> = ({
  rank,
  highDay,
  imgUrl,
  lowDay,
  name,
  openDay,
  price,
  rating,
  toSymbol,
}) => {
  const handleClick = () => {};

  const formatNumberK = (num?: number): string => {
    if (num && num >= 1000) {
      const kNum = num / 100;
      return kNum.toFixed(1) + "k";
    } else {
      if (num) {
        return num.toLocaleString();
      }
      return "-";
    }
  };

  return (
    <div
      onClick={() => handleClick()}
      className="whitespace-nowrap group relative mx-1 cursor-pointer overflow-hidden rounded-lg bg-secondaryBg px-2 py-10 duration-300 hover:scale-105 "
    >
      <div className="flex items-center justify-between group-hover:opacity-10">
        <Image
          className="rounded-full"
          src={`https://www.cryptocompare.com${imgUrl}`}
          alt="coinLogo"
          width={100}
          height={100}
        />
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-lg">
            {`${formatNumberK(price)}`}{" "}
            <span className="text-green-400">{toSymbol}</span>
          </p>
          <div className="text-lg">Rating : {rating || "-"}</div>
        </div>
      </div>
      <div className="mt-5 group-hover:opacity-10">
        <div className="flex justify-around gap-2 text-center text-lg">
          <p className="flex flex-col ">
            Open{" "}
            <span className="flex flex-col ">
              {formatNumberK(openDay)}{" "}
              <span className="text-green-400">{toSymbol}</span>
            </span>
          </p>
          <p className="flex flex-col ">
            High{" "}
            <span className="flex flex-col text-red-500">
              {formatNumberK(highDay)}{" "}
              <span className="text-green-400">{toSymbol}</span>
            </span>
          </p>
          <p className="flex flex-col ">
            Low{" "}
            <span className="flex flex-col text-blue-500">
              {formatNumberK(lowDay)}{" "}
              <span className="text-green-400">{toSymbol}</span>
            </span>
          </p>
        </div>
      </div>
      <div className="absolute left-2 top-2 text-xl">{rank}</div>
      <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 rounded-xl opacity-0 duration-300 group-hover:opacity-100 ">
        <p className="text-center text-lg">More information about </p>
        <p className="text-lg font-bold">{name}</p>
      </div>
    </div>
  );
};

export default CoinCard;
