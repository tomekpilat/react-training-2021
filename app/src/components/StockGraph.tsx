import React, {
  useState,
  useEffect,
  useContext,
} from "react";
import { getDailyStockPrice } from "../data/Stocks.Service";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { StocksContext } from "../context/StocksContext";

const StockGraph = () => {
  const [period, setPeriod] = useState("today");
  const { state, dispatch } = useContext(StocksContext);
  const [stockprices, setStockPrices] = useState({
    detailed: [],
    aggregated: [],
  });

  useEffect(() => {
    const fetchPrice = async () => {
      const result = await getDailyStockPrice(
        state.selected
      );
      setStockPrices(result);
    };
    fetchPrice();
  }, [state.selected]);

  console.log(state);
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: state.selected,
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
