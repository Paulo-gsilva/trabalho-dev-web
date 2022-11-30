import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./news.css";
import News from "./News/News";
import image from "../../img/bible-g38657752f_1920.jpg";

function NewsContainer() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="news-container">
      <h3>Novidades</h3>
      <p>Cursos novos com alta qualidade!</p>
      <div className="news-container-grid">
        <motion.div
          ref={carousel}
          className="news-map"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="news-items"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <motion.div className="news">
              <News
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="news">
              <News
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="news">
              <News
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="news">
              <News
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="news">
              <News
                title="React"
                teacher="Paulo"
                img={image}
                alt="imagem bíblia"
              />
            </motion.div>
            <motion.div className="news">
              <News
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

export default NewsContainer;
