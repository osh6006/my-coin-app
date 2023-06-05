"use client";

import { SafeUser } from "@/app/Types";
import Loading from "@/app/components/Loading";
import CoinDetailChart from "@/app/components/coin/CoinDetailChart";
import CoinDetailHeader from "@/app/components/coin/CoinDetailHeader";
import CoinDetailTabs from "@/app/components/coin/CoinDetailTabs";
import useCoinDetail from "@/app/components/hooks/useCoinDetail";

interface CoinDetailClientProps {
  currentUser?: SafeUser | null;
  coinId: any;
  symbol: any;
}

const CoinDetailClient: React.FC<CoinDetailClientProps> = ({ currentUser, coinId, symbol }) => {
  const { data: coinInfo, isLoading } = useCoinDetail({ coinId, symbol });

  console.log(coinInfo);

  const coinDetail = coinInfo?.detailCoinInfo?.Data[symbol];
  const coinDaily = coinInfo?.dailyCoinInfo.Data;

  console.log(coinDetail);

  if (isLoading) {
    return (
      <div className="w-screen h-screen relative">
        <Loading />
      </div>
    );
  }

  return (
    <div className="p-5 max-w-screen-xl mx-auto sm:p-0">
      <div className="flex items-center justify-center sm:block">
        <CoinDetailHeader imgUrl={coinDetail.ImageUrl} name={coinDetail.CoinName} symbol={coinDetail.Symbol} />
      </div>
      <div className="flex flex-col items-center justify-center sm:justify-start px-2">
        <div className="w-full  rounded-md">
          <CoinDetailTabs />
          <CoinDetailChart daily={coinDaily} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default CoinDetailClient;
