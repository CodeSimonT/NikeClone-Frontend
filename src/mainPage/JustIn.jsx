import React, { useEffect } from "react";
import {
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  S10,
  S11,
  S12,
  S13,
  S14,
  S15,
  S16,
  S17,
  S18,
  S19,
  S20,
  S21,
  S22,
  S23,
  S24,
  S25,
  S26,
  S27,
  S28,
  S29,
  S30,
  S31,
  S32,
  S33,
} from "../assets/images/index";

function JustIn() {
  useEffect(() => {
    var splide = new Splide("#splidejustin", {
      perPage: 4,
      gap: "1rem",
      type: "loop",
      autoscroll: { speed: 1 },
      autoplay: true,
      rewind: true,
      pagination: false,
    });
    splide.mount();
  }, []);

  return (
    <div className="splide my-5" id="splidejustin">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={S1} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={S2} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={S3} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={S4} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S5} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S6} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S7} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S8} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S9} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S10} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S11} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S12} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S13} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S14} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S15} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S16} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S17} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S18} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S19} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S20} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S21} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S22} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S23} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S24} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S25} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S26} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S27} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S28} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S29} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S30} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S31} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S32} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={S33} className="img-fluid imageSplide" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JustIn;
