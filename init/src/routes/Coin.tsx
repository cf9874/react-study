import { useParams } from "react-router-dom";

interface CoinParams {
  coinId: string;
}

function Coin() {
  //   const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams<CoinParams>();
  console.log(1010, coinId);

  return <div>Coin : {coinId}가나다</div>;
}

export default Coin;
