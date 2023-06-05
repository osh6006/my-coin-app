"use client";

import { SafeUser } from "@/app/Types";
import Loading from "@/app/components/Loading";
import useCoinDetail from "@/app/components/hooks/useCoinDetail";

interface CoinDetailClientProps {
  currentUser?: SafeUser | null;
  coinId: any;
  symbol: any;
}

const CoinDetailClient: React.FC<CoinDetailClientProps> = ({ currentUser, coinId, symbol }) => {
  const { data, isLoading } = useCoinDetail(coinId);

  // console.log(data);
  // console.log(isLoading);

  if (isLoading) {
    return (
      <div className="w-screen h-screen relative">
        <Loading />
      </div>
    );
  }

  return (
    <div className=" max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-6">asdf</div>
    </div>
  );
};

export default CoinDetailClient;
