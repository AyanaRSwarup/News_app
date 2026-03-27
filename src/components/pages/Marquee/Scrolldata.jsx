import React, { useContext } from "react";
import { StockContext } from "../../../api/Stock_api";
import ScrollVelocity from "./Scroll.jsx";

const Scrolldata = () => {
  const { stocks } = useContext(StockContext);

  const texts = stocks.map(
    item =>
      `${item.symbol} ${
        item.change > 0 ? "↑" : "↓"
      } ${item.price} || `
  )
  

  return (
    <ScrollVelocity
      texts={[texts]}
      velocity={50}
      numCopies={2}
      className="custom-scroll-text font-sans h-10 text-4xl  mt-3 text-gray-500  "
    />
  );
};

export default Scrolldata;
