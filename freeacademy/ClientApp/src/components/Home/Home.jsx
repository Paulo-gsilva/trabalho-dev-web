import React from "react";
import NewsContainer from "../NewsContainer/NewsContainer";
import RatingContainer from "../RatingContainer/RatingContainer";
import { NavMenu } from "../NavMenu";
import "./home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <NavMenu />
      <section className="home-section">
        <div className="home-section-title">
          <div className="section-title-text">
            <h2>Bem-Vindo a Free Academy</h2>
            <p>
              Aqui você poderá consumir conteúdos de várias matérias de forma
              gratuita e de qualidade, nossos cursos possuem alta nota de
              aprovação.
            </p>
          </div>
        </div>
        <NewsContainer />
        <RatingContainer
          title="Mais Vistos"
          description="Cursos populares entre os estudantes!s"
        />
      </section>
      <Footer style="footer-section" />
    </>
  );
}

export default Home;
