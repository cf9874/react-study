import { useQuery } from "@tanstack/react-query";
import { getCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistory {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
interface seriesProps {
  x: number;
  y: number[];
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>(["history", coinId], () => getCoinHistory(coinId));
  console.log(1111, data);

  const candleSeries = (price: IHistory[]) => {
    const data = price.map((e) => {
      return { x: e.time_open, y: [e.open, e.high, e.low, e.close] };
    });
    return data;
  };

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => {
                return {
                  x: price.time_open,
                  y: [Number(price.open), Number(price.high), Number(price.low), Number(price.close)],
                };
              }) as seriesProps[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: true,
              },
            },
            grid: { show: true },
            stroke: {
              curve: "smooth",
              width: 1,
            },
            yaxis: {
              show: true,
            },
            xaxis: {
              axisBorder: { show: true },
              axisTicks: { show: true },
              labels: { show: true },
              type: "datetime",
              categories: data?.map((price) => new Date(price.time_close * 1000).toISOString()),
            },

            tooltip: {
              y: {
                formatter: (val, opts?) => `$${val.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
