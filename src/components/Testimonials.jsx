import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import tes1 from "../assets/Tes1.png";
import tes2 from "../assets/Tes2.png";
import tes3 from "../assets/Tes3.png";
import quote from "../assets/quote.png";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-heading">
        <h1>Testimonials</h1>
      </div>
      <div className="tes-slider">
        <Splide>
          <SplideSlide>
            <div className="tes-item-wrapper">
              <img src={tes1} alt="" />
              <div className="tes-text-content">
                <p>
                 " I recently bought a home through Nilima (RM), and although
                  this can be a stressful process, i was 100% confident with her
                  approach. She was candid, provided prompt feedback, clearly
                  explained all the project details, and managed the negotiation
                  brillantly. "
                </p>
                <h2>- Prem Suman</h2>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="tes-item-wrapper">
              <img src={tes2} alt="" />
              <div className="tes-text-content">
                <p>
                  "I liked Nilima's (RM) approach and she did a great job in
                  showcasing the property & fulfulling our requirement in
                  property hunt within a short period of time. Her service was
                  fantastic and eliminated all the hassle of property buying"
                </p>
                <h2>- Apeksha Sharma</h2>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="tes-item-wrapper">
              <img src={tes3} alt="" />
              <div className="tes-text-content">
                <p>
                  "Really nice home buying experience through Fly Realty.
                  Everything was made easy for me from property search to
                  finalization. Wishing all the best to Fly Realty's future
                  endeavors."
                </p>
                <h2>- Shiva</h2>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
