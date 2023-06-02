import axios from "axios";

export default async function getCoin(category: string | null | undefined = "All") {
  try {
    if (category === "Top") {
      const AllCoin = await axios.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD");
      return AllCoin.data;
    }

    if (category === "Hot") {
      const AllCoin = await axios.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD");
      return AllCoin.data;
    }

    if (category === "News") {
      const AllCoin = await axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=EN");
      return AllCoin.data;
    }

    return [];
  } catch (error: any) {
    throw new Error(error);
  }
}
