import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { DATA } from "../data/data";

const BookContext = createContext(null);
const bookData = DATA;
const BookContextProvider = ({ children }) => {
  return (
    <BookContext.Provider value={bookData}>{children}</BookContext.Provider>
  );
};

export { BookContext, BookContextProvider };
