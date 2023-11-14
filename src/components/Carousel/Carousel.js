import React, { useState } from "react";
import "./Carousel.css";

const images = [
  "img/iPhone-15-Pro-Max.png",
  "img/HP-VICTUS-15.png",
  "img/Mix-Fold-3.png",
  "img/Pixel-8-Pro.jpeg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <section className="Carousel">
      <section className="slider">
        <div className="left-arrow" onClick={prevSlide}>{`<`}</div>

        <div className="right-arrow" onClick={nextSlide}>{`>`}</div>

        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </section>

      <section className="sec-img">
        <img src="img/Sony-WH-1000XM5.png" alt="" />
        <img src="img/Asus-Rog-Ally.jpeg" alt="" />
      </section>
    </section>
  );
};

export default Carousel;
