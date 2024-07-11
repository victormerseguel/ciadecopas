"use client";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContaxtProvier = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [mobileShows, setMobileShows] = useState(false);

  return (
    <Context.Provider
      value={{ mobile, setMobile, mobileShows, setMobileShows }}
    >
      {children}
    </Context.Provider>
  );
};
