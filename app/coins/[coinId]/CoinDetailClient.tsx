"use client";

import { SafeUser } from "@/app/Types";
import EmptyState from "@/app/components/EmptyState";
import Loading from "@/app/components/Loading";
import CoinDetailChart from "@/app/components/coin/CoinDetailChart";
import CoinDetailDesc from "@/app/components/coin/CoinDetailDesc";
import CoinDetailEtc from "@/app/components/coin/CoinDetailEtc";
import CoinDetailHeader from "@/app/components/coin/CoinDetailHeader";
import CoinDetailSocial from "@/app/components/coin/CoinDetailSocial";
import CoinDetailTabs from "@/app/components/coin/CoinDetailTabs";
import useCoinDetail from "@/app/components/hooks/useCoinDetail";
import useCoinDetailTabs from "@/app/components/hooks/useCoinDetailTabs";

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
  const coinSocial = coinInfo?.socialCoinInfo.Data;

  const { type } = useCoinDetailTabs();
  if (isLoading) {
    return (
      <div className="w-screen h-screen relative">
        <Loading />
      </div>
    );
  }

  if (!coinInfo) {
    return <EmptyState showReset />;
  }

  console.log(coinInfo);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center max-w-screen-xl mx-auto sm:p-0 gap-3">
      <div className="flex-1 p-0 sm:px-10">
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
            {type === "chart" && <CoinDetailChart daily={coinDaily} monthly={coinMonthly} yearly={coinYearly} />}
            {type === "desc" && <CoinDetailDesc contents={coinDetail} />}
            {type === "etc" && (
              <CoinDetailEtc rating={coinDetail.Rating.Weiss} totalMined={coinDetail.TotalCoinsMined} />
            )}
          </div>
        </div>
      </div>
      <CoinDetailSocial data={coinSocial} />
    </div>
  );
};

export default CoinDetailClient;
