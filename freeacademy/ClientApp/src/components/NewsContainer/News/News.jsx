import React from "react";
import "../news.css";

function News({ title, teacher }) {
  return (
    <article className="news-article">
      <img></img>
      <h4>{title}</h4>
      <p>{teacher}</p>
    </article>
  );
}

export default News;
