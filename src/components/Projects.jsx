import React, { useState } from "react";
import { Nav, Header, Footer } from "../exports";
import team from "../assets/TeamGroup.png";
import { Carousel } from "@trendyol-js/react-carousel";
import project001 from "../assets/project001.jpg";
import project002 from "../assets/project002.jpg";
import project003 from "../assets/project003.jpg";

import AmritVana from "../assets/AmritVana.png";
import BrigadeOasis from "../assets/BrigadeOasis.png";
import CoenclaevFlorenza from "../assets/CoenclaevFlorenza.png";

import EngraceVista from "../assets/EngraceVista.png";
import InspiraInfinity from "../assets/InspiraInfinity.png";
import PurvaMedihalli from "../assets/PurvaMedihalli.png";

import SamithaSerine from "../assets/SamithaSerine.png";
import SoulacebyModernSpaaces from "../assets/SoulacebyModernSpaaces.png";
import Urbanrise from "../assets/Urbanrise.png";

import DNRParkLinkPhase2 from "../assets/DNRParkLinkPhase2.png";
import GodrejAnandaPhase3 from "../assets/GodrejAnandaPhase3.png";
import Krishvievilla from "../assets/Krishvievilla.png";
import KumarProspera from "../assets/KumarProspera.png";
import RAKFelicity from "../assets/RAKFelicity.png";
import SNNHighGardens from "../assets/SNNHighGardens.png";
import SumadhuraFolium from "../assets/SumadhuraFolium.png";


import flyBenefits from "../assets/flyBenefits.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import projectVideo from "../assets/video-projects.mp4";
import { Navigation } from "swiper/modules";
import ReactCardFlip from "react-card-flip";
import "./Projects.css";

export default function Projects() {
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [projectCategory, setProjectCategory] = useState("all");

  const handleCardFlip = (index) => {
    setFlippedIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.includes(index)
        ? prevIndexes.filter((prevIndex) => prevIndex !== index)
        : [...prevIndexes, index];
      return updatedIndexes;
    });
  };

  const [activeButton, setActiveButton] = useState("");

  const filterProjects = (category) => {
    setProjectCategory(category);
    setActiveButton(category);
  };

  const filteredProjects =
    projectCategory === "all"
      ? projectData
      : projectCategory === "apartments"
      ? apartmentData
      : projectCategory === "villas"
      ? villaData
      : flatData;
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
                    <h6><b> Because we perform the Due Dilligence on the Property, </b>We understand buying a property is a big decision, so we want to take the worry off your shoulders. That's why we offer comprehensive due diligence before you commit. We'll meticulously comb through legal documents to ensure clear ownership, check for any liens or encumbrances, and conduct thorough physical inspections to identify potential structural issues or hidden problems. We'll even research zoning regulations and delve into the neighborhood's history and future plans. Think of it as a detailed background check for your potential home, giving you the peace of mind to make an informed and confident decision based on all the facts.</h6>
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
                    <h6><b>Because we perform the Due Dilligence on the Builder,</b> By conducting thorough due diligence, we minimize the risks associated with choosing the wrong builder and give you peace of mind knowing you're entrusting your investment to a credible and reliable professional.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fly-personalised">
          <h1>Personalized Home Buying Journey</h1>
          <div className="fly-personalised-img">
            <video src={projectVideo} autoPlay loop muted />
          </div>
        </div>
        <div className="fly-benefits">
          <h1>How are We different?</h1>
          <div className="fly-benefits-img">
            <img src={flyBenefits} alt="" />
          </div>
        </div>

        {/* Filter Section */}

        <div className="rec-projects">
          <h1>Recommended Projects</h1>
          <div className="filter-section">
            <button
              className={`apart-btn ${
                activeButton === "apartments" ? "active1" : ""
              }`}
              onClick={() => filterProjects("apartments")}
            >
              Apartments
            </button>
            <button
              className={`villa-btn ${
                activeButton === "villas" ? "active1" : ""
              }`}
              onClick={() => filterProjects("villas")}
            >
              Villas
            </button>
            <button
              className={`flat-btn ${
                activeButton === "flats" ? "active1" : ""
              }`}
              onClick={() => filterProjects("flats")}
            >
              Plots
            </button>
          </div>
          <div className="rec-projects-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={3.5}
              loop={true}
              className="rec-desk"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ReactCardFlip
                    isFlipped={flippedIndexes.includes(index)}
                    flipDirection="horizontal"
                  >
                    <div
                      className="rec-project-item"
                      onMouseEnter={() => handleCardFlip(index)}
                      onClick={() => handleCardFlip(index)}
                    >
                      <div className="rec-project-item-img">
                        <img src={project.image} alt="" />
                        <h2>{project.name}</h2>
                        <h4 className="location-info">
                          <i className="fa-solid fa-location-dot"></i>
                          {project.location}
                        </h4>
                      </div>
                    </div>
                    <div
                      className="rec-project-item"
                      onMouseLeave={() => handleCardFlip(index)}
                      onClick={() => handleCardFlip(index)}
                    >
                      <div className="rec-project-item-text">
                        <h3>{project.informationHeading}</h3>
                        <h3>{project.informationHeading1}</h3>
                        <div className="rec-project-item-location">
                          <h6>{project.informationText}</h6>
                        </div>
                      </div>
                    </div>
                  </ReactCardFlip>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="rec-projects tablet-projects">
          <h1>Recommended Projects</h1>
          <div className="rec-projects-wrapper">
            <Swiper
              navigation={true}
              pagination={{ clickable: true }} // Enable pagination
              spaceBetween={0}
              slidesPerView={2}
              loop={true}
            >
              {projectData.map((project, index) => (
                <SwiperSlide key={index}>
                  <ReactCardFlip
                    isFlipped={flippedIndexes.includes(index)}
                    flipDirection="horizontal"
                  >
                    <div
                      className="rec-project-item"
                      onMouseEnter={() => handleCardFlip(index)}
                    >
                      <div className="rec-project-item-img">
                        <img src={project.image} alt="" />
                        <h2>{project.name}</h2>
                        <h4 className="location-info">
                          <i className="fa-solid fa-location-dot"></i>
                          {project.location}
                        </h4>
                      </div>
                    </div>
                    <div
                      className="rec-project-item"
                      onMouseLeave={() => handleCardFlip(index)}
                    >
                      <div className="rec-project-item-text">
                        <h3>{project.informationHeading}</h3>
                        <div className="rec-project-item-location">
                          <h6>{project.informationText}</h6>
                        </div>
                      </div>
                    </div>
                  </ReactCardFlip>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="rec-projects mobile-projects">
          <h1>Recommended Projects</h1>
          <div className="wrap-filter-section">
          <div className="filter-section">
            <button
              className={`apart-btn ${
                activeButton === "apartments" ? "active1" : ""
              }`}
              onClick={() => filterProjects("apartments")}
            >
              Apartments
            </button>
            <button
              className={`villa-btn ${
                activeButton === "villas" ? "active1" : ""
              }`}
              onClick={() => filterProjects("villas")}
            >
              Villas
            </button>
            <button
              className={`flat-btn ${
                activeButton === "flats" ? "active1" : ""
              }`}
              onClick={() => filterProjects("flats")}
            >
              Plots
            </button>
          </div>
          </div>
          <div className="rec-projects-wrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={8}
              slidesPerView={1}
              loop={true}
              className="rec-desk"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ReactCardFlip
                    isFlipped={flippedIndexes.includes(index)}
                    flipDirection="horizontal"
                  ><div className="wrap-rec-project-item">
                    <div
                      className="rec-project-item"
                      onMouseEnter={() => handleCardFlip(index)}
                      onClick={() => handleCardFlip(index)}
                    >
                      <div className="rec-project-item-img">
                        <img src={project.image} alt="" />
                        <h2>{project.name}</h2>
                        <h4 className="location-info">
                          <i className="fa-solid fa-location-dot"></i>
                          {project.location}
                        </h4>
                      </div>
                    </div>
                    </div>
                    <div
                      className="rec-project-item"
                      onMouseLeave={() => handleCardFlip(index)}
                      onClick={() => handleCardFlip(index)}
                    >
                      <div className="rec-project-item-text">
                        <h3>{project.informationHeading}</h3>
                       
                        <div className="rec-project-item-location">
                          <h6>{project.informationText}</h6>
                        </div>
                      </div>
                    </div>
                  </ReactCardFlip>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="cta">
        <a href="tel:+91984473355">
          Connect With Dedicated Real Property Consultants
        </a>
      </div>
      </div>
      <Footer />
    </div>
  );
}

const apartmentData = [
  {
    name: "Provident East Lalbagh",
    location: "Soukya Road, Whitefield",
    image: project001,
    informationHeading: "2 & 3 BHK Premium Apartments ",
    informationHeading1: "Starting from 85 Lakhs Onwards",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "Inspira Infinity",
    location: "Carmelaram, Sarjapur Road",
    image: InspiraInfinity,
    informationHeading: "2 & 3 BHK Premium Apartments ",
    informationHeading1: "Starting from 1.26 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>1.13 Acres of land parcel</li>
          <li>80% Open Space</li>
          <li>74% Carpet Area Efficiency | 105 Units</li>
          <li>20+ Amenities</li>
          <li>RERA Registered | BBMP Approved | A Khata</li>
        </ul>
      </>
    ),
  },
  {
    name: "Samhita Serene MTB ",
    location: "TC Palya, KR Puram",
    image: SamithaSerine,
    informationHeading: "2 & 3 BHK Premium Apartments ",
    informationHeading1: "Starting from 64 Lakhs Onwards",
    informationText: (
      <>
        <ul>
          <li>6.5 Acres of land parcel</li>
          <li>12000 Sft Clubhouse</li>
          <li>20+ Amenities</li>
          <li>30 Mins to Manyata Tech Park</li>
          <li>RERA Registered | BDA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "CoEvolve Florenza ",
    location: "Off Sarjapura Road, Bagalur",
    image: CoenclaevFlorenza,
    informationHeading: "2 & 3 BHK Premium Apartments ",
    informationHeading1: "Starting from 70 Lakhs Onwards",
    informationText: (
      <>
        <ul>
          <li>4.5 Acres of land parcel</li>
          <li>82% Open Space</li>
          <li>50+ Luxury Amenities</li>
          <li>30 Mins to all IT Parks</li>
          <li>RERA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Engrace Vista by Modern Spaaces",
    location: "Sompura Gate, Off Sarjapura",
    image: EngraceVista,
    informationHeading: "3 BHK Spacious Apartments",
    informationHeading1: "Starting from Rs. 1.30 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>8 Acres of land parcel</li>
          <li>7 Towers, 392 Units</li>
          <li>Mivan/AluForm Technology</li>
          <li>30+ world-class amenities</li>
          <li>BMRDA Sanction, RERA Compliant</li>
        </ul>
      </>
    ),
  },
  {
    name: "DNR Parklink Phase II",
    location: "Hennur Main Road",
    image: DNRParkLinkPhase2,
    informationHeading: "3 BHK Luxury Apartments",
    informationHeading1: "Starting from Rs. 1.20 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>8.5 Acres of Land Parcel</li>
          <li>70% Open Space | 784 Units</li>
          <li>70+ World Class Amenities</li>
          <li>15 Mins from Manyata Tech Park</li>
          <li>RERA Approved | BBMP Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "SNN Raj High Gardens",
    location: "Chandapura, Near Electronic City",
    image: SNNHighGardens,
    informationHeading: "2 & 3 BHK Premium Apartments",
    informationHeading1: "Starting from Rs. 85 Lakhs Onwards",
    informationText: (
      <>
        <ul>
          <li>9 Acres of Land Parcel</li>
          <li>70% Open Space | 1050 Units</li>
          <li>1 Lakh Sq Ft Amenity Zone</li>
          <li>10 Mins from Bommasandra Metro Station</li>
          <li>RERA Registered | BDA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Sumadhura Folium - Phase II",
    location: "Whitefield, Near Nexus Forum Mall.",
    image: SumadhuraFolium,
    informationHeading: "2, 3 & 4 BHK Luxury Apartments",
    informationHeading1: "Starting from Rs. 2.15 Crore Onwards",
    informationText: (
      <>
        <ul>
          <li>11 Acres of Land Parcel</li>
          <li>84% Open Space | 400 Units</li>
          <li>52,000 Sq Ft Clubhouse</li>
          <li>20 Mins from Whitefield Metro Station</li>
          <li>RERA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Godrej Ananda Phase III ",
    location: "KIADB Aerospace Park, Bagalur",
    image: GodrejAnandaPhase3,
    informationHeading: "2 BHK, 3 BHK & Jodi Apartments",
    informationHeading1: "Starting from Rs. 75 Lakhs Onwards",
    informationText: (
      <>
        <ul>
          <li>21 Acres of Land Parcel</li>
          <li>85% Open Space | 806 Units</li>
          <li>38,000 Sq Ft Clubhouse | 30+ Amenities</li>
          <li>15 Mins from International Airport Road</li>
          <li>BIAPPA Approved | RERA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Kumar Prospera",
    location: "Hennur Main Road",
    image: KumarProspera,
    informationHeading: "2 & 3 BHK Premium Apartments",
    informationHeading1: "Starting from 1.05 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>2.10 Acres of Land Parcel</li>
          <li>229 Units with no common walls</li>
          <li>35+ Amenities</li>
          <li>10 Mins to Manyata Tech Park</li>
          <li>RERA Approved</li>
        </ul>
      </>
    ),
  },
];

const villaData = [
  {
    name: "Urbanrise - City with Infinite Life ",
    location: "Off Kanakura Road",
    image:Urbanrise,
    informationHeading: "4 BHK Luxury Villas",
    informationHeading1: "Starting from Rs. 2.88 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>24 Acres of land parcel</li>
          <li>32,000 Sft Clubhouse</li>
          <li>20+ Luxury Amenities</li>
          <li>20 Mins from Silk Institute Metro Station</li>
          <li>RERA Approved | BMRDA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Provident Deansgate",
    location: "Devanahalli, IVC Main Road",
    image: project002,
    informationHeading: "3 BHK Luxury Villas",
    informationHeading1: "Starting from Rs. 1.90 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>15+ Acres of land parcel</li>
          <li>80% Open Space | 147+ Villas</li>
          <li>25+ Amenities</li>
          <li>15 Mins to Bengaluru International Airport</li>
          <li>RERA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Soulace by Modern Spaces",
    location: "Sompura, Off Sarjapura Road",
    image: SoulacebyModernSpaaces,
    informationHeading: "4 & 5 BHK Luxury Villas with Lift",
    informationHeading1: "Starting from ₹3.2 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>26.5 Acres of Land Parcel</li>
          <li>13.7 Acres of Open Space</li>
          <li>30+ World Class Amenities</li>
          <li>30 Mins from Wipro Limited</li>
          <li>RERA Approve | BMRDA Approved</li>
        </ul>
      </>
    ),
  },

  {
    name: "Krishvi e’Villa",
    location: "Chandapura, Electronic City",
    image: Krishvievilla,
    informationHeading: "4 BHK Eco-Conscious Villas",
    informationHeading1: "Starting from 1.50 Cr Onwards",
    informationText: (
      <>
        <ul>
          <li>2.22 Acres of Land Parcel</li>
          <li>10,000 Sft Clubhouse</li>
          <li>42 Customizable Units</li>
          <li>20+ Amenities</li>
          <li>RERA/BMRDA/STRR Approved</li>
        </ul>
      </>
    ),
  },
 
];

const flatData = [
  {
    name: "Brigade Oasis",
    location: "Devanahalli, Doddaballapura",
    image: BrigadeOasis,
    informationHeading:
      "1200 Sq Ft - 2400 Sq Ft Premium Plots ",
      informationHeading1: "Starting at Rs. 6,500/Sq Ft",
    informationText: (
      <>
        <ul>
          <li>65 Acres of land parcel</li>
          <li>900+ Units</li>
          <li>20+ Amenities</li>
          <li>Reflexology Garden with Retention Ponds</li>
          <li>RERA Approved</li>
        </ul>
      </>
    ),
  },
  {
    name: "Amrit Vana",
    location: "Mandur Road, Budigere Cross ",
    image: AmritVana,
    informationHeading: "1200 Sq Ft - 2400 Sq Ft Premium Plots",
    informationHeading1: "Starting at Rs. 4,200/Sq Ft",
    informationText: (
      <>
        <ul>
          <li>Ready to Register</li>
          <li>31 Acres of land parcel</li>
          <li>749 Plots</li>
          <li>15+ Amenities</li>
          <li>RERA Registered | BBMP Approved | A Khata</li>
        </ul>
      </>
    ),
  },
  {
    name: "Purva Medihalli ",
    location: "Mandur Road, Budigere Cross",
    image: PurvaMedihalli,
    informationHeading: "1200, 1500 & 2400 Premium Sq Ft Plots",
    informationHeading1: "Starting from Rs. 7000/- Sq Ft",
    informationText: (
      <>
        <ul>
          <li>60+ Acres of land parcel</li>
          <li>25,000 Sft Clubhouse</li>
          <li>45 % Open Space |  600+ Units</li>
          <li>30+ Amenities</li>
          <li>BMRDA Approved | e-Katha</li>
        </ul>
      </>
    ),
  },
  {
    name: "RAK Felicity by Vencer Properties",
    location: "Devanahalli, Adjacent to STRR",
    image: RAKFelicity,
    informationHeading: "1200 Sq Ft - 2400 Sq Ft Premium Plots",
    informationHeading1: "Starting from Rs. 4499/Sq Ft",
    informationText: (
      <>
        <ul>
          <li>15 Acres of Land Parcel</li>
          <li>250 Vastu Compliant Plots</li>
          <li>30+ Amenities</li>
          <li>Close to KIADB Aerospace SEZ</li>
          <li>BIAPPA Approved | RERA Approved</li>
        </ul>
      </>
    ),
  },
  
];

const projectData = [
  {
    name: "Provident Deansgate",
    location: "IVC Road, Devanahalli",
    image: project002,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "BRIGADE CALISTA",
    location: "Cheemasandra, Bommenahalli",
    image: project001,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "Nikoo Homes",
    location: "Thanisandra Main Road",
    image: project003,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "BRIGADE CALISTA",
    location: "Cheemasandra, Bommenahalli",
    image: project001,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "Provident Deansgate",
    location: "IVC Road, Devanahalli",
    image: project002,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "Nikoo Homes",
    location: "Thanisandra Main Road",
    image: project003,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "BRIGADE CALISTA",
    location: "Cheemasandra, Bommenahalli",
    image: project001,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "Provident Deansgate",
    location: "IVC Road, Devanahalli",
    image: project002,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
  {
    name: "Nikoo Homes",
    location: "Thanisandra Main Road",
    image: project003,
    informationHeading:
      "2 & 3 BHK Premium Apartments Starting from 85 Lakhs Onwards.",
    informationText: (
      <>
        <ul>
          <li>14+ Acres of land parcel</li>
          <li>65% Open</li>
          <li>9 Towers, 1110 Units</li>
          <li>25+ world-class amenities</li>
          <li>RERA Registered</li>
        </ul>
      </>
    ),
  },
];
