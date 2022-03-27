import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "4569dc201d4846d3a73c5ea3e486890d";

  const fetchNew = async()=>{
    const res = await axios.get( `https://newsapi.org/v2/top-headlines?country=in&apiKey=4569dc201d4846d3a73c5ea3e486890d`)

    setData(res.data)
  }


  useEffect(() => {
    fetchNew();
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
