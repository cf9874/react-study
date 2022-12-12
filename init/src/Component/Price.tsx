import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCoinPrice } from "../api";

interface PriceProps {
  coinId: string;
}

const Container = styled.div`
  max-width: 480px;
  min-width: 250px;
  width: inherit;
  margin: 0 auto;
`;
const High = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  div {
    text-align: center;
    width: 50%;
    height: 80px;
    div {
      border: 1px solid red;
      width: 100%;
      height: 50%;
      line-height: 40px;
      font-size: 12px;
    }
  }
`;
const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tab = styled.div`
  text-align: center;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 15px 0;
  width: 200px;
`;
function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery(["price", coinId], () => getCoinPrice(coinId));
  const {
    quotes: { USD },
  } = data;

  return (
    <Container>
      <High>
        <div>
          <div>최고가</div>
          <div>{Date.parse(USD.ath_date)}</div>
        </div>

        <div>{USD?.ath_price.toFixed(3)}</div>
      </High>
      <Tabs>
        <Tab>
          <div>{coinId}</div>
        </Tab>
        <Tab>
          <div>asd</div>
          <div>asd</div>
        </Tab>
      </Tabs>
      <Tabs>
        <Tab>
          <div>{coinId}</div>
          <div>asd</div>
        </Tab>
        <Tab>
          <div>asd</div>
          <div>asd</div>
        </Tab>
      </Tabs>
      <Tabs>
        <Tab>
          <div>{coinId}</div>
          <div>asd</div>
        </Tab>
        <Tab>
          <div>asd</div>
          <div>asd</div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Price;
