import axios from "axios";

interface getCoinByIdParams {
  coinId: string;
  symbol: string;
}

export default async function getCoinById({ coinId, symbol }: getCoinByIdParams) {
  console.log(coinId, process.env.COIN_API_KEY);

  try {
    if (coinId && symbol) {
      const {
        data: {
          Data: { Data: dailyCoinInfo },
        },
      } = await axios.get(`https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=23`);

      const {
        data: {
          Data: { Data: monthlyCoinInfo },
        },
      } = await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=30`);

      const yearlyCoinInfo = await formatYearly(symbol);
      const priceCoinInfo = await getCoinPrice(symbol);

      const { data: socialCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/social/coin/latest?coinId=${coinId}&api_key=d356ae1a1f1efaa2456b289b6631731e66f3fff9c3d30a249adcce1265586191`
      );

      const { data: detailCoinInfo } = await axios.get(
        `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}`
      );

      if (
        !monthlyCoinInfo ||
        !yearlyCoinInfo ||
        !dailyCoinInfo ||
        !priceCoinInfo ||
        !socialCoinInfo ||
        !detailCoinInfo
      ) {
        return null;
      }

      return { monthlyCoinInfo, yearlyCoinInfo, dailyCoinInfo, priceCoinInfo, socialCoinInfo, detailCoinInfo };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getCoinPrice(id: string) {
  const currentDate = new Date();
  const endDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000); // 24시간 전의 시간

  const historicalPriceResponse = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${id}&tsym=USD&limit=1&toTs=${
      endDate.getTime() / 1000
    }&aggregate=1&e=CCCAGG`
  );

  const previousPrice = historicalPriceResponse.data.Data.Data[0].close;
  const { data: todayPrice } = await axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=${id}&tsyms=USD,JPY,EUR,KRW`
  );

  return { today: todayPrice, past: previousPrice };
}

async function formatYearly(symbol: string) {
  const { data: yearlyCoinInfo } = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=364`
  );

  return yearlyCoinInfo.Data.Data.filter((el: any, index: number) => (index + 1) % 30 === 0);
}
