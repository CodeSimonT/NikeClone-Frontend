import React, { useEffect } from "react";
// import AlwaysIconic from "./alwaysiconic.css";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
  pic17,
  pic18,
  pic19,
} from "../assets/images/index";

function AlwaysIconic() {
  useEffect(() => {
    var splide = new Splide("#splidealwaysiconic", {
      perPage: 3,
      gap: "2rem",
      type: "loop",
      autoscroll: { speed: 1 },
      rewind: true,
      pagination: false,
    });
    splide.mount();
  }, []);

  return (
    <div className="splide my-5" id="splidealwaysiconic">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <img src={pic18} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={pic19} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={pic1} className="img-fluid imageSplide" />
          </li>

          <li className="splide__slide">
            <img src={pic10} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic9} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic2} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic8} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic11} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic3} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic12} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic13} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic7} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic4} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic16} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic6} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic15} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic14} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic5} className="img-fluid imageSplide" />
          </li>
          <li className="splide__slide">
            <img src={pic17} className="img-fluid imageSplide" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AlwaysIconic;
