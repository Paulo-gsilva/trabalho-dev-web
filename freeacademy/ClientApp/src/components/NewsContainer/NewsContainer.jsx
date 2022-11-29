import React from "react";
import "./news.css";
import News from "./News/News";

function NewsContainer() {
  return (
    <div className="news-container">
      <button className="arrow-left">a</button>
      <button className="arrow-right">b</button>

      {/* <h3>Novidades</h3>
      <p>Cursos novos com alta qualidade!</p> */}
      {/* <div className="news-container-grid"> */}
      {/* <div className="news-map"> */}
      {/* </div> */}
      {/* </div>  */}
    </div>
  );
}

export default NewsContainer;
