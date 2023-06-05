"use client";

import Image from "next/image";

interface CoinDetailHeaderProps {
  imgUrl: string;
  name: string;
  symbol: string;
}

const CoinDetailHeader: React.FC<CoinDetailHeaderProps> = ({ imgUrl, name, symbol }) => {
  return (
    <div className="flex gap-3 items-center mb-10 mx-auto ">
      <Image
        loading="lazy"
        src={`https://www.cryptocompare.com${imgUrl}`}
        alt="coinLogo"
        width={75}
        height={75}
        className="rounded-full"
      />
      <div className="flex items-center gap-4 ">
        <h1 className="font-bold text-4xl">{name}</h1>
        <span className="py-1 px-2 bg-gray-200 text-gray-700 font-bold uppercase text-sm rounded-xl">{symbol}</span>
      </div>
    </div>
  );
};

export default CoinDetailHeader;
