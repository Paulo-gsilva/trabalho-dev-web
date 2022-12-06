import React from "react";
import "../news.css";

function News({ title, teacher, img, alt }) {
  return (
    <article className="news-article">
      <img className="article-img" src={img} alt={alt}></img>
      <div className="article-text">
        <h4>{title}</h4>
        <p>{teacher}</p>
      </div>
    </article>
  );
}

export default News;