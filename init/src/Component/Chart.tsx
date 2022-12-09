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

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistory[]>(["history", coinId], () => getCoinHistory(coinId));
  console.log(1111, data);
  console.log(
    2222,
    data?.map((price) => Number(price.close))
  );
  const series = {
    name: "price",
    data: data?.map((price) => Number(price.close)),
  };
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) as number[],
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
              width: 4,
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
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              colors: ["red"],
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
