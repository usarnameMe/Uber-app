import React, { createContext, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    setBasket((prevBasket) => [...prevBasket, item]);
  };

  const removeFromBasket = (itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
