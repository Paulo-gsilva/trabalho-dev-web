import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Rating from "./Rating/Rating";
import "./rating.css";
import image from "../../img/bible-g38657752f_1920.jpg";

function RatingContainer() {
  const ratingCarousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      ratingCarousel.current?.scrollWidth - ratingCarousel.current?.offsetWidth
    );
  }, []);

  return (
    <div className="rating-container">
      <h3>Mais Vistos</h3>
      <p>Cursos populares entre os estudantes!</p>
      <div className="rating-container-grid">
        <motion.div
          ref={ratingCarousel}
          className="rating-map"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="rating-items"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <motion.div className="rating-item">
              <Rating
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="rating-item">
              <Rating
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="rating-item">
              <Rating
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="rating-item">
              <Rating
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="rating-item">
              <Rating
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="rating-item">
              <Rating
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default RatingContainer;
