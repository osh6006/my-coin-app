import axios from "axios";

export default async function getCoin(
  category: string | null | undefined = "All"
) {
  try {
    if (category === "Top") {
      const AllCoin = await axios.get(
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD"
      );
      return AllCoin.data;
    }

    return [];
  } catch (error: any) {
    throw new Error(error);
  }
}
