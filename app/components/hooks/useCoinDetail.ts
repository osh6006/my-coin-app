import getCoin from "@/app/actions/getCoin";
import getCoinById from "@/app/actions/getCoinById";
import { useEffect, useState } from "react";

export default function useCoinDetail(coinId: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData(coinId);
  }, [coinId]);

  async function fetchData(coinId: string) {
    try {
      const response = await getCoinById(coinId);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return { isLoading, data };
}
