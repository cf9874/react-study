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
