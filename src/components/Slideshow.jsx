import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../App.css";
import shape from "../assets/Ellipse3.png";
import Graph1 from "../assets/Gra1.png";
import Graph2 from "../assets/Gra2.png";
import Graph3 from "../assets/Gra3.png";
import Graph4 from "../assets/Gra4.png";

export default function Slideshow() {
  return (
    <>
      <div className="shape-eclipse">
        <img src={shape} alt="eclipse shape" />
      </div>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <div className="graphSlide">
            <img src={Graph1} alt="Image 1" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="graphSlide">
            <img src={Graph2} alt="" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="graphSlide">
            <img src={Graph3} alt="Image 1" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="graphSlide">
            <img src={Graph4} alt="Image 1" />
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
}
