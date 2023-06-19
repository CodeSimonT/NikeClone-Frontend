import React, { useEffect } from "react";
import App from "./App.css";

function SneakrzCarousel() {
  useEffect(() => {
    var splide = new Splide(".splide", {
      perPage: 3,
      gap: "2rem",
      type: "loop",
      autoscroll: { speed: 1 },
      rewind: true,
    });
    splide.mount();
  }, []);

  return (
    <div className="splide my-5" id="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src="src/images/pic18.jpg" className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img
              src="src/images/pic19.jpeg"
              className="img-fluid imageSplide"
            />
          </li>

          <li className="splide__slide">
            <img src="src/images/pic1.jpeg" className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img
              src="src/images/pic10.jpeg"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic9.jpeg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic2.jpg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic8.jpg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic11.jpg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic3.jpeg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img
              src="src/images/pic12.jpeg"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/images/pic13.jpeg"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic7.jpeg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img
              src="src/images/pic13.jpeg"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic16.jpg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic6.jpeg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img
              src="src/images/pic15.jpeg"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic14.jpg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic5.jpeg" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/pic17.jpg" className="img-fluid imageSplide" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SneakrzCarousel;
