import axios from "axios";

export const getCoinData = async () => {
  const result = await axios.get("https://api.coinpaprika.com/v1/coins").then((res) => res.data);

  console.log(result);

  return result;
};

export const getCoinDetail = async (coinId: string) => {
  const result = await axios(`https://api.coinpaprika.com/v1/coins/${coinId}`).then((res) => res.data);

  console.log(result);

  return result;
};
export const getCoinPrice = async (coinId: string) => {
  const result = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`).then((res) => res.data);

  console.log(result);

  return result;
};

export const getCoinHistory = async (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000); // 현재 시간을 초로 나타냄
  const startDate = endDate - 60 * 60 * 24; // 현재 시간에서 1주 -1 시간에 해당하는 초를 뺌;
  const result = await axios(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`).then((res) => res.data);

  console.log(result);

  return result;
};
