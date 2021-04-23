import React, { useContext } from "react";
import {
  StocksContext,
  ActionTypes,
} from "../context/StocksContext";
import { ActiveContext } from "../context/ActiveContext";
import TransactionsContext from "../context/TransactionsContext";
import StockItem from "./StockItem";

const WatchList = () => {
  const { state, dispatch } = useContext(StocksContext);
  const { symbol, changeSymbol } = useContext(
    ActiveContext
  );

  if (!Boolean(state?.watchList)) {
    return null;
  }
  // console.log(symbol, changeSymbol);
  return (
    <>
      <h1>Watchlist</h1>
      <p>Active stock: {symbol}</p>
      {state.watchList.map((stock) => (
        <StockItem
          name={stock.name}
          symbol={stock.symbol}
          key={stock.name}
          onSelect={() => changeSymbol(stock.symbol)}
        />
      ))}
    </>
  );
};

export default WatchList;
