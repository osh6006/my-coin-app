import getCoin from "@/app/actions/getCoin";
import { useEffect, useState } from "react";

export default function useCoin(category?: string | null) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchData(category);
  }, [category]);

  async function fetchData(category?: string | null) {
    try {
      const response = await getCoin(category);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return { isLoading, data };
}
