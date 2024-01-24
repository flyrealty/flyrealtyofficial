import React from "react";
import { Nav, Header, Footer } from "../exports";
import team from "../assets/TeamGroup.png";
import { Carousel } from "@trendyol-js/react-carousel";
import project001 from "../assets/project001.jpg";
import project002 from "../assets/project002.jpg";
import project003 from "../assets/project003.jpg";
import flyBenefits from "../assets/flyBenefits.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import projectVideo from '../assets/video-projects.mp4'
import { Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <div className="container">
      <Nav />
      <div className="projects">
        <div className="projects-heading">
          <div className="projects-heading-text">
            <h1>We're Professionals!</h1>
            <p>It's our job to assist you with home-buying.</p>
          </div>
          <div className="projects-heading-img">
            <img src={team} alt="" />
          </div>
        </div>
        <div className="fly-choice">
          <div className="choice-heading">
            <h1>Why Choose Us</h1>
          </div>
          <div className="choice-content">
            <div className="choice-points">
              <div className="choice-point">
                <div className="point-index">
                  <h1>01</h1>
                </div>
                <div className="point-content">
                  <h3>Because we only deal with RERA Approved Projects</h3>
                  <div className="point-desc">
                    <h6>
                      <b>Because we only deal with RERA Approved Projects, </b>
                      which holds the responsibility of protecting the interests
                      of homebuyers and investors by promoting transparency and
                      accountability. The RERA approval criteria are designed to
                      ensure the utmost quality of the property by adhering to
                      the predetermined standards.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="choice-point">
                <div className="point-index">
                  <h1>02</h1>
                </div>
                <div className="point-content">
                  <h3>
                    Because we perform the Due Dilligence on the Property.
                  </h3>
                  <div className="point-desc">
                    <h6></h6>
                  </div>
                </div>
              </div>
              <div className="choice-point">
                <div className="point-index">
                  <h1>03</h1>
                </div>
                <div className="point-content">
                  <h3>Because we perform the Due Dilligence on the Builder.</h3>
                  <div className="point-desc">
                    <h6></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fly-personalised">
        <h1>Personalized Home Buying Journey
        </h1>
        <div className="fly-personalised-img">
        
        <video src={projectVideo} autoPlay loop muted/>
     
        </div>
      </div>
        <div className="fly-benefits">
          <h1>How are We different?</h1>
          <div className="fly-benefits-img">
            <img src={flyBenefits} alt="" />
          </div>
        </div>
        <div className="rec-projects">
          <h1>Recommeded Projects</h1>
          <div className="rec-projects-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={3.5}
              loop={true}
              className="rec-desk"
            >
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project002} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>Provident Deansgate</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>IVC Road, Devanahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project003} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>Nikoo Homes</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Thanisandra Main Road</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project002} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project003} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="rec-projects tablet-projects">
          <h1>Recommeded Projects</h1>
          <div className="rec-projects-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={2}
              loop={true}
            >
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project002} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project003} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project002} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project003} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="rec-projects mobile-projects">
          <h1>Recommeded Projects</h1>
          <div className="rec-projects-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={8}
              slidesPerView={1}
              loop={true}
              className="rec-desk"
            >
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project002} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project003} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project002} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project003} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rec-project-item">
                  <div className="rec-project-item-img">
                    <img src={project001} alt="" />
                  </div>
                  <div className="rec-project-item-text">
                    <h2>BRIGADE CALISTA</h2>
                    <div className="rec-project-item-location">
                      <i class="fa-solid fa-location-dot"></i>
                      <h6>Cheemasandra, Bommenahalli</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="cta">
          <Link>Connect With Dedicated Real Property Consultants</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
