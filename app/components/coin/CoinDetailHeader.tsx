"use client";

import Image from "next/image";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface CoinDetailHeaderProps {
  imgUrl: string;
  name: string;
  symbol: string;
  price?: PriceProp;
}

interface PriceProp {
  today: any;
  past: number;
}

const CoinDetailHeader: React.FC<CoinDetailHeaderProps> = ({ imgUrl, name, symbol, price }) => {
  return (
    <div className="my-10">
      <div className="flex gap-3 items-center mx-auto ">
        <Image
          loading="lazy"
          src={(imgUrl && `https://www.cryptocompare.com${imgUrl}`) || "https://placehold.co/600x400"}
          alt="coinLogo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex items-center gap-4 ">
          <div className="flex gap-3 items-center">
            <h1 className="font-bold text-3xl sm:text-4xl">{name}</h1>
            <span className="py-1 px-2 bg-gray-200 text-gray-700 font-bold uppercase text-sm rounded-xl">{symbol}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center mx-5 gap-4">
        <div className="font-semibold text-4xl sm:text-5xl">{price?.today.USD} $</div>
        {price && (
          <div
            className={`${
              Number((price.today.USD - price.past).toFixed(2)) > 0
                ? "flex text-blue-400 bg-sky-100"
                : "flex text-red-400 bg-pink-100/70 "
            } p-1 rounded-md `}
          >
            <span className="font-bold text-xs sm:text-base">{(price.today.USD - price.past).toFixed(2)}</span>
            <span>
              {Number((price.today.USD - price.past).toFixed(2)) > 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinDetailHeader;
