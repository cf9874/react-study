import axios from "axios";
import { Route, Routes, useLocation, useMatch, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Price from "../Component/Price";
import Chart from "../Component/Chart";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCoinDetail, getCoinPrice } from "../api";

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Tab = styled.div<{ isActive: boolean }>`
  text-align: center;
  line-height: 50px;
  background-color: ${(props) => (props.isActive ? " rgba(35, 100, 100, 0.5)" : "rgba(0, 0, 0, 0.5)")};
  border-radius: 10px;
  margin: 15px 0;
  &:hover {
    background-color: rgba(35, 100, 100, 0.5);
  }
  a {
    padding: 30px 80px;
  }
`;

function Coin() {
  //   const { coinId } = useParams<{ coinId: string }>();
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouterState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  console.log(154, coinId);

  const { isLoading: detailLoading, data: detailData } = useQuery<IInfoData>(["detail", coinId], () =>
    getCoinDetail(`${coinId}`)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<IPriceData>(
    ["price", coinId],
    () => getCoinPrice(`${coinId}`),
    {
      refetchInterval: 60 * 1000,
      //주기적으로 업데이트
    }
  );

  const loading = detailLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title> {state?.name ? state.name : loading ? "Loading..." : `CoinInfo | ${detailData?.name}`}</title>
      </Helmet>
      <Header>
        <Title> {state?.name ? state.name : loading ? "Loading..." : detailData?.name}</Title>
      </Header>
      <Overview>
        <OverviewItems>
          <span>Rank</span>
          <span>{detailData?.rank}</span>
        </OverviewItems>
        <OverviewItems>
          <span>Symbol</span>
          <span>${detailData?.symbol}</span>
        </OverviewItems>
        <OverviewItems>
          <span>Price</span>
          <span>{priceData?.quotes.USD.price.toFixed(3)}</span>
        </OverviewItems>
      </Overview>
      <Description>{detailData?.description}</Description>
      <Overview>
        <OverviewItems>
          <span>Total Suply:</span>
          <span>{priceData?.total_supply}</span>
        </OverviewItems>
        <OverviewItems>
          <span>Max Supply:</span>
          <span>{priceData?.max_supply}</span>
        </OverviewItems>
      </Overview>
      <Tabs>
        <Tab isActive={priceMatch !== null}>
          <Link to="price">Price</Link>
        </Tab>
        <Tab isActive={chartMatch !== null}>
          <Link to="chart">Chart</Link>
        </Tab>
      </Tabs>
      <Routes>
        <Route path="chart" element={<Chart coinId={`${coinId}`} />} />
        <Route path="price" element={<Price />} />
      </Routes>
      
    </Container>
  );
}

export default Coin;
