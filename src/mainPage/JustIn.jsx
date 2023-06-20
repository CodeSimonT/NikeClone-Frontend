import React, { useEffect } from "react";
import App from "./App.css";

function JustIn() {
  useEffect(() => {
    var splide = new Splide(".splide", {
      perPage: 4,
      gap: "1rem",
      type: "loop",
      autoscroll: { speed: 1 },
      autoplay: true,
      rewind: true,
    });
    splide.mount();
  }, []);

  return (
    <div className="splide my-5" id="splide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src="src/images/S1.webp" className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src="src/images/S2.webp" className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src="src/images/S3.webp" className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src="src/images/S4.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/S5.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/S6.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/S7.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/S8.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/S9.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src="src/images/S10.webp" className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S11.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S12.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S13.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S14.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S15.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S16.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S17.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S18.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S19.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S19.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S19.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S20.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S21.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S22.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S23.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S24.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S25.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S26.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S27.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S28.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S29.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S30.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S31.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S32.webp"
              className="img-fluid imageSplide"
            />
          </li>
          <li className="splide__slide">
            <img
              src="src/assets/images/S33.webp"
              className="img-fluid imageSplide"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JustIn;
