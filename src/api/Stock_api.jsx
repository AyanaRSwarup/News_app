import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const StockContext = createContext();



const Stock_api = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
       
        const symbols = ["AAPL", "TSLA", "MSFT", "AMZN", "GOOGL"];

        
        const responses = await Promise.all(
          symbols.map(symbol =>
            axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${import.meta.env.VITE_STOCK_API}`
            )
          )
        );

      
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