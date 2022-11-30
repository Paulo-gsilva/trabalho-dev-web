import React from "react";
import Footer from "../Footer/Footer";
import { NavMenu } from "../NavMenu";
import RatingContainer from "../RatingContainer/RatingContainer";
import "./course.css";

function CoursePage({ isTeacher }) {
  return (
    <>
      <NavMenu />
      <section className="course-section">
        {!isTeacher ? (
          <>
            <RatingContainer
              title="Em progresso"
              description="Estes são os cursos que você ainda está assistindo!"
            />

            <RatingContainer
              title="Concluídos"
              description="Estes são os cursos que você já finalizou!"
            />
          </>
        ) : (
          <RatingContainer
            title="Postados"
            description="Estes são os cursos que você postou!"
          />
        )}
      </section>
      <Footer style="footer-section-profile s" />
    </>
  );
}

export default CoursePage;
