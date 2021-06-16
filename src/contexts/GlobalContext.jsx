import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryPicked, setCountryPicked] = useState(null);

  const request = (api) => {
    return axios
      .get(`${api}`)
      .then((response) => {
        setCountryPicked(
          response.data[Math.floor(Math.random() * response.data.length) + 1]
        );
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        if (error) console.error(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    request("https://restcountries.eu/rest/v2/all");
  }, []);

  return (
    <GlobalContext.Provider value={{ loading, countryPicked }}>
      {children}
    </GlobalContext.Provider>
  );
};
