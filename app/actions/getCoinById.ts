import axios from "axios";

export default async function getCoinById(params: string) {
  try {
    if (params) {
      const coinId = params;

      const dailyCoinInfo = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coinId}&tsym=USD&limit=30`
      );

      const hourlyCoinInfo = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coinId}&tsym=USD&limit=24`
      );

      const minuteCoinInfo = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coinId}&tsym=USD&limit=20`
      );

      const coinPrice = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${coinId}&tsyms=USD`);

      if (!dailyCoinInfo || !hourlyCoinInfo || !minuteCoinInfo || !coinPrice) {
        return null;
      }
      return { dailyCoinInfo, hourlyCoinInfo, minuteCoinInfo, coinPrice };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
