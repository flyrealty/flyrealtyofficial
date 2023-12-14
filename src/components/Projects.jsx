import React from 'react'
import { Nav, Header, Footer} from '../exports'
import team from '../assets/TeamGroup.png'
import { Carousel } from '@trendyol-js/react-carousel';
import project001 from '../assets/project001.jpg';
import project002 from '../assets/project002.jpg';
import project003 from '../assets/project003.jpg';
import flyBenefits from '../assets/flyBenefits.png'
import { Link } from 'react-router-dom';
import personOne from '../assets/person001.jpg'
import personTwo from '../assets/person002.jpg'

export default function Projects() {
  return (
    <div className="container">
    <Nav />
      <div className="projects">
          <div className="projects-heading">
            <div className="projects-heading-text">
              <h1>Don't Worry,</h1>
              <h1>We're Professionals!</h1>
              <p>It's our job to assist you with home-buying.</p>
            </div>
            <div className="projects-heading-img">
              <img src={team} alt="" />
            </div>
          </div>
          <div className="fly-choice">
            <div className="choice-heading">
              <h1>Why</h1>
              <h1>Choose</h1>
              <h1>Us</h1>
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
                      <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
                    </div>
                  </div>
                </div>
                <div className="choice-point">
                  <div className="point-index">
                    <h1>02</h1>
                  </div>
                  <div className="point-content">
                    <h3>Because we perform the Due Dilligence on the Property.</h3>
                    <div className="point-desc">
                      <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
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
                      <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
                    </div>
                  </div>
                </div>
              </div>
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
            <Carousel show={3.5} slide={1} swiping={true} className='rec-desktop-carousel' useArrowKeys={true} rightArrow={true} leftArrow={true}>
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
	          </Carousel>
            </div>
          </div>
          <div className="rec-projects tablet-projects">
            <h1>Recommeded Projects</h1>
            <div className="rec-projects-wrapper">
            <Carousel show={2} slide={1} swiping={true} className='rec-desktop-carousel'>
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
	          </Carousel>
            </div>
          </div>
          <div className="rec-projects mobile-projects">
            <h1>Recommeded Projects</h1>
            <div className="rec-projects-wrapper">
            <Carousel show={1} slide={1} swiping={true} className='rec-desktop-carousel'>
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
	          </Carousel>
            </div>
          </div>
          <div className="performers">
            <div className="performers-wrapper">
              <Carousel show={3} slide={1} swiping={true} className='rec-desktop-carousel'>
                  <div className="performer-item">
                    <img src={personOne} alt="" />
                  </div>
                  <div className="performer-item">
                    <img src={personTwo} alt="" />
                  </div>
                  <div className="performer-item">
                    <img src={personOne} alt="" />
                  </div>
              </Carousel>
              <div className="performers-content">
                <h1>Professional Performers</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </div>
          <div className="performers tablet-performers">
            <div className="performers-wrapper">
              <Carousel show={2.5} slide={1} swiping={true} className='rec-desktop-carousel'>
                  <div className="performer-item">
                    <img src={personOne} alt="" />
                  </div>
                  <div className="performer-item">
                    <img src={personTwo} alt="" />
                  </div>
                  <div className="performer-item">
                    <img src={personOne} alt="" />
                  </div>
              </Carousel>
              <div className="performers-content">
                <h1>Professional Performers</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </div>
          <div className="performers mobile-performers">
            <div className="performers-wrapper">
              <Carousel show={1} slide={1} swiping={true} className='rec-desktop-carousel'>
                  <div className="performer-item">
                    <img src={personOne} alt="" />
                  </div>
                  <div className="performer-item">
                    <img src={personTwo} alt="" />
                  </div>
                  <div className="performer-item">
                    <img src={personOne} alt="" />
                  </div>
              </Carousel>
              <div className="performers-content">
                <h1>Professional Performers</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
          </div>
          <div className="cta">
          <Link>Connect With Dedicated Real Property Consultants</Link>
          </div>

      </div>
    <Footer />
  </div>
  )
}
