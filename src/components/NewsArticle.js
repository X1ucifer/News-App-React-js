import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img className="image" src={data.urlToImage}></img>
      <h1 className="news__title">{data.title}</h1>

      <p className="news__desc">{data.description}</p>
      <span className="news__author">Author : {data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span><br />
      <a href={data.url} target="_blank" className="">Read More</a>
    </div>
  );
}

export default NewsArticle;
