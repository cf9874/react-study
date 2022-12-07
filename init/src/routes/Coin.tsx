import { useParams } from "react-router-dom";

interface CoinParams {
  coinId: string;
}

function Coin() {
  //   const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams<CoinParams>();
  console.log(coinId);

  return <div>Coin : {coinId}</div>;
}

export default Coin;
