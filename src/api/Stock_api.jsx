import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const StockContext = createContext();

const API_KEY = "d6ulfapr01qig5450l2gd6ulfapr01qig5450l30"; // 🔥 put your key here

const Stock_api = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        // You still need a list (no API gives "all stocks")
        const symbols = ["AAPL", "TSLA", "MSFT", "AMZN", "GOOGL"];

        // Fetch all in parallel
        const responses = await Promise.all(
          symbols.map(symbol =>
            axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
            )
          )
        );

        // Format data cleanly
        const formatted = responses.map((res, index) => ({
          symbol: symbols[index],
          price: res.data.c,
          change: res.data.d
        }));

        setStocks(formatted);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <StockContext.Provider value={{ stocks }}>
      {children}
    </StockContext.Provider>
  );
};

export default Stock_api;