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

  const coinDetail = coinInfo?.detailCoinInfo?.Data[symbol];
  const coinDaily = coinInfo?.dailyCoinInfo;
  const coinMonthly = coinInfo?.monthlyCoinInfo;
  const coinYearly = coinInfo?.yearlyCoinInfo;
  const coinPrice = coinInfo?.priceCoinInfo;

  console.log(coinInfo);

  if (isLoading) {
    return (
      <div className="w-screen h-screen relative">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-5 max-w-screen-xl mx-auto sm:p-0 gap-6">
      <div className="flex-1">
        <div className="flex items-center justify-center sm:block">
          <CoinDetailHeader
            imgUrl={coinDetail?.ImageUrl}
            name={coinDetail?.CoinName}
            symbol={coinDetail?.Symbol}
            price={coinPrice}
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:justify-start px-2">
          <div className="w-full relative rounded-md">
            <CoinDetailTabs />
            <CoinDetailChart daily={coinDaily} monthly={coinMonthly} yearly={coinYearly} />
          </div>
        </div>
      </div>
      <div className="min-w-[300px] bg-slate-500">asdf</div>
    </div>
  );
};

export default CoinDetailClient;