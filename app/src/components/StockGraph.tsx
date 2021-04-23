import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import { getDailyStockPrice } from "../data/Stocks.Service";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { StocksContext } from "../context/StocksContext";
import { ActiveContext } from "../context/ActiveContext";

const StockGraph = () => {
  const [period, setPeriod] = useState("today");
  const { state, dispatch } = useContext(StocksContext);
  const { symbol, changeSymbol } = useContext(
    ActiveContext
  );
  const [stockprices, setStockPrices] = useState({
    detailed: [],
    aggregated: [],
  });

  useEffect(() => {
    const fetchPrice = async () => {
      const result = await getDailyStockPrice(symbol);
      setStockPrices(result);
    };
    fetchPrice();
  }, [symbol]);

  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: symbol,
    },
    subtitle: {
      text: "",
    },
    xAxis: { type: "datetime" },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "detailed",
        data: stockprices.detailed.map((item: any) => ({
          date: item.date,
          y: item.price,
        })),
      },
      {
        name: "aggregated",
        data: stockprices.aggregated.map((item: any) => ({
          date: item.date,
          y: item.price,
        })),
      },
    ],
  };

  return (
    <section>
      <h2>Period</h2>
      <div id='stockGraphContainer'>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </section>
  );
};

export default StockGraph;
