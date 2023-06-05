import getCoin from "@/app/actions/getCoin";
import getCoinById from "@/app/actions/getCoinById";
import { useEffect, useState } from "react";

interface useCoinDetailParams {
  coinId: string;
  symbol: string;
}

export default function useCoinDetail({ coinId, symbol }: useCoinDetailParams) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData({ coinId, symbol });
  }, [coinId, symbol]);

  async function fetchData({ coinId, symbol }: useCoinDetailParams) {
    try {
      const response = await getCoinById({ coinId, symbol });
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return { isLoading, data };
}
