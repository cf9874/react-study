import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface CoinParams {
  coinId: string;
}
interface RouterState {
  name: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  min-width: 250px;
  width: inherit;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  font-size: 20px;
`;

function Coin(props: {}) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [info, setInfo] = useState<IInfoData>();
  const [price, setPrice] = useState<IPriceData>();
  //   const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouterState;

  useEffect(() => {
    (async () => {
      const resDetail = await axios(`https://api.coinpaprika.com/v1/coins/${coinId}`);
      const resPrice = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
      setInfo(resDetail.data);
      setPrice(resPrice.data);

      console.log(5151, resDetail);
      console.log(5252, resPrice.data);
      const {
        data: {
          quotes: {
            USD: { price },
          },
        },
      } = resPrice;
      console.log(price);

      setLoading(true);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "please Login"}</Title>
      </Header>
      {loading ? price?.quotes.USD.price : <Loader>loading...</Loader>}
    </Container>
  );
}

export default Coin;
