"use client";

import { SafeUser } from "@/app/Types";
import Loading from "@/app/components/Loading";
import CoinDetailHeader from "@/app/components/coin/CoinDetailHeader";
import useCoinDetail from "@/app/components/hooks/useCoinDetail";
import Image from "next/image";

interface CoinDetailClientProps {
  currentUser?: SafeUser | null;
  coinId: any;
  symbol: any;
}

const CoinDetailClient: React.FC<CoinDetailClientProps> = ({ currentUser, coinId, symbol }) => {
  const { data: coinInfo, isLoading } = useCoinDetail({ coinId, symbol });

  console.log(coinInfo);

  const coinDetail = coinInfo?.detailCoinInfo?.Data[symbol];

  console.log(coinDetail);

  if (isLoading) {
    return (
      <div className="w-screen h-screen relative">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center justify-center sm:block">
        <CoinDetailHeader imgUrl={coinDetail.ImageUrl} name={coinDetail.CoinName} symbol={coinDetail.Symbol} />
      </div>
      <div className="flex gap-6">
        <div className="flex-1 p-5 bg-pink-100 rounded-md"></div>
        <div className="">asdf</div>
      </div>
    </div>
  );
};

export default CoinDetailClient;
