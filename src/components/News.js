import React, { useState, useEffect } from "react";
import NewsArticle from "./NewsArticle";
import axios from "axios";


function News() {

  const [data, setData] = useState();

  const fetchNew = async () => {
    const res = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2022-03-26&to=2022-03-26&sortBy=popularity&apiKey=4569dc201d4846d3a73c5ea3e486890d`)

    setData(res.data)
  }


  useEffect(() => {
    fetchNew();
  }, []);

  console.log("-->", data);

  return (
    <div>
      {/* <h1 className="head__text">News App 👋</h1> */}
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
            <NewsArticle data={news} />
          ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
