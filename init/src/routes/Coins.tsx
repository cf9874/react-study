import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
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
const CoinList = styled.ul`
  a {
    li {
      transition: color 0.2s ease-in;
      &:hover {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
`;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  font-size: 20px;
`;

function Coins() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await axios("https://api.coinpaprika.com/v1/coins");

      const coinList = response.data.slice(0, 100);
      //   console.log(coinList);
      setCoins(coinList);
      setLoading(true);
    })();
  }, []);
  //   https://cryptoicon-api.vercel.app/api/icon/btc
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinList>
        {loading ? (
          coins.map((coin) => (
            <Link to={`/${coin.id}`} state={{ name: coin.name }}>
              <Coin key={coin.id}>
                <img
                  src={`https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/16/${coin.name
                    .toLowerCase()
                    .split(" ")
                    .join("-")}.png`}
                />
                {coin.name} &rarr;
              </Coin>
            </Link>
          ))
        ) : (
          <Loader>loading...</Loader>
        )}
      </CoinList>
    </Container>
  );
}

export default Coins;
