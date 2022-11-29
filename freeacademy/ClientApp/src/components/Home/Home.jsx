import React from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import Rating from "../Rating/Rating";
import { NavMenu } from "../NavMenu";
import "./home.css";

function Home() {
  return (
    <>
      <NavMenu />
      <section className="home-section">
        <div className="home-section-title">
          <h2>Bem-Vindo a Free Academy</h2>
        </div>
        <NewsContainer />
        <Rating />
      </section>
    </>
  );
}

export default Home;
