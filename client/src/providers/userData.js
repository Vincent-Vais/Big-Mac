import React, { createContext, useState } from "react";
import { getData } from "../utils";

export const UserDataContext = createContext({
  data: null,
  amount: 0,
  changeAmount: () => {},
  getLocalCountryData: () => {},
  getForeignCountryData: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(0);

  const changeAmount = (val) => {
    const num = parseInt(val);
    if (!num) return setAmount(0);
    setAmount(num);
  };

  const getLocalCountryData = () => {
    return new Promise((resolve, reject) => {
      getData("local")
        .then((data) => {
          setData(data);
          resolve(true);
        })
        .catch((err) => reject(err));
    });
  };

  const getForeignCountryData = () => {
    return new Promise((resolve, reject) => {
      Promise.all([getData("random"), getData("other")])
        .then((countriesData) => resolve(countriesData))
        .catch((err) => reject(err));
    });
  };

  return (
    <UserDataContext.Provider
      value={{
        data,
        amount,
        changeAmount,
        getLocalCountryData,
        getForeignCountryData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
