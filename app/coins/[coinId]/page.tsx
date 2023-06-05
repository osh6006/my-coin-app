import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import CoinDetailClient from "./CoinDetailClient";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

interface IParams {
  params: Params;
  searchParams: SearchParams;
}

interface Params {
  coinId?: string;
}

interface SearchParams {
  symbol: string;
}

const CoinPage = async (Iparams: IParams) => {
  const currentUser = await getCurrentUser();

  return (
    <Suspense fallback={<Loading />}>
      <ClientOnly>
        <CoinDetailClient
          currentUser={currentUser}
          coinId={Iparams.params.coinId}
          symbol={Iparams.searchParams.symbol}
        />
      </ClientOnly>
    </Suspense>
  );
};

export default CoinPage;
