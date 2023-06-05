import axios from "axios";

interface getCoinByIdParams {
  coinId: string;
  symbol: string;
}

export default async function getCoinById({ coinId, symbol }: getCoinByIdParams) {
  try {
    if (coinId && symbol) {
      const { data: dailyCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=30`
      );

      const { data: hourlyCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=24`
      );

      const { data: minuteCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${symbol}&tsym=USD&limit=20`
      );

      const { data: priceCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD`
      );

      const { data: socialCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/social/coin/latest?coinId=${coinId}`
      );

      const { data: detailCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}`
      );

      if (
        !dailyCoinInfo ||
        !hourlyCoinInfo ||
        !minuteCoinInfo ||
        !priceCoinInfo ||
        !socialCoinInfo ||
        !detailCoinInfo
      ) {
        return null;
      }

      return { dailyCoinInfo, hourlyCoinInfo, minuteCoinInfo, priceCoinInfo, socialCoinInfo, detailCoinInfo };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}
