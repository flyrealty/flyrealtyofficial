import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../App.css'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../assets/style.module.css';
import chess from '../assets/chess.png';
import hand from '../assets/hand.png';
import pendoolum from '../assets/pendoolum.mp4'
import buildings from '../assets/Buildings.jpg'
import {Assetz, Bhartiya, Brigade, Casagrand, Century, DNR, Godrej, Goyal, Hiranandani, Inspira, Krishvi, Lodha, Mahindra,
    Modern, Prestige, Provident, Puravankara, Ramky, RK, Rohan, Sattva, Shriram, Sobha, Sammita,Total} from '../assets/logos/imgExports'
export default function Business() {
  return (
    <div className="container">
        <Nav />
            <div className="wrapper">
                <div className='business'>
                    <div className="business-heading">
                        <div className="business-head">
                            <h1>All Things Sales!</h1>
                            <h2>Higher Volume of Sales & Revenue in a short period of time, at no additional cost.*</h2>
                        </div>
                        <div className="business-img">
                            <img src={hand} alt="" />
                        </div>
                    </div>
                    <div className="optimized-section">
                        <div className="opt-heading">
                            <div className="opt-heading-text">
                                <h1>Optimized Strategy</h1>
                                <h2>End-to-end Marketing & Sales Strategy</h2>
                            </div>
                            <div className="opt-heading-img">
                                <img src={chess} alt="" />
                            </div>
                        </div>
                        <div className="opt-items">
                            <div className="opt-item">
                                <div className="opt-item-ele">
                                    <div className="opt-item-no">
                                        <h2>01</h2>
                                    </div>
                                </div>
                                <h6>360 Degree Marketing Plan (Digital & Offline)</h6>
                            </div>
                            <div className="opt-item">
                                <div className="opt-item-ele">
                                    <div className="opt-item-no">
                                        <h2>02</h2>
                                    </div>
                                </div>
                                <h6>Lead-Centric Marketing Approach</h6>
                            </div>
                            <div className="opt-item">
                                <div className="opt-item-ele">
                                    <div className="opt-item-no">
                                        <h2>03</h2>
                                    </div>
                                </div>
                                <h6>Inventory Management & Cost Sheet Planning</h6>
                            </div>
                            <div className="opt-item">
                                <div className="opt-item-ele">
                                    <div className="opt-item-no">
                                        <h2>04</h2>
                                    </div>
                                </div>
                                <h6>Channel Partner Activation & Empanelment</h6>
                            </div>
                            <div className="opt-item">
                                <div className="opt-item-ele">
                                    <div className="opt-item-no">
                                        <h2>05</h2>
                                    </div>
                                </div>
                                <h6>Referral Sales Strategy</h6>
                            </div>
                        </div>
                    </div>
                    <div className="studio">
                        <div className="video-bg">
                            <video src={pendoolum} autoPlay loop muted/>
                        </div>
                        <div className="studio-text">
                            <h1>No Sales Without <span>Marketing!</span></h1>
                            <p><span>FLY Studio</span> is a 360-Degree Real Estate Marketing Agency founded by Real Estate Professionals with strong expertise in both the departments of marketing & sales.</p>
                        </div>
                    </div>
                    <div className="art">
                        <div className="art-text">
                            <h1>The Science and Art of Real Estate Marketing</h1>
                            <p>We understand the Science of Real Estate Campaigns - Strategy, Lead Management and Metrics Analysis.</p>
                            <p>We know the Art of Delivering Real Estate Campaigns - Media, Design and Communications.</p>
                            <a href="tel:+91984473355">
             
              <h5>Call us</h5>
            </a>
                        </div>
                        <div className="art-img">
                            <img src={buildings} alt="" />
                        </div>
                    </div>
                    <div className="case-studies">
                        <div className="case-wrapper">
                            
                            <Splide aria-label="My Favorite Images">
                                <SplideSlide>
                                    <div className="case">
                                        <div className="case-head-title">
                                            <h1>Case Studies</h1>
                                        </div>
                                        <div className="case-content">
                                            <div className="case-text">
                                                <h1>01</h1>
                                                <div className="case-points">
                                                    <h4>Plotted Development in Sarjapura</h4>
                                                    <h4>Need of the Hour - Launch of the Project</h4>
                                                </div>
                                            </div>
                                            <div className="case-highlights">
                                                <div className="highlight">
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>100,000</span> Sft Worth 200 Cr Inventory Sold</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>200%</span> Marketing ROI</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>5,000/Sft</span> Avg. Basic Price Achieved</h6>
                                                    </div>
                                                </div>
                                                <div className="highlight">
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>20+</span> Channel Partners Activated</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>49%</span> Lead Qualification Ratio</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>15%</span> Site Visit to Closure Ratio</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="case">
                                        <div className="case-head-title">
                                            <h1>Case Studies</h1>
                                        </div>
                                        <div className="case-content">
                                            <div className="case-text">
                                                <h1>02</h1>
                                                <div className="case-points">
                                                    <h4>Plotted Development in Sarjapura</h4>
                                                    <h4>Need of the Hour - Launch of the Project</h4>
                                                </div>
                                            </div>
                                            <div className="case-highlights">
                                                <div className="highlight">
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>100,000</span> Sft Worth 200 Cr Inventory Sold</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>200%</span> Marketing ROI</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>5,000/Sft</span> Avg. Basic Price Achieved</h6>
                                                    </div>
                                                </div>
                                                <div className="highlight">
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>20+</span> Channel Partners Activated</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>49%</span> Lead Qualification Ratio</h6>
                                                    </div>
                                                    <div className="highlight-item">
                                                        <span></span>
                                                        <h6><span>15%</span> Site Visit to Closure Ratio</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                    <div className="clients">
                        <div className="builders-logo">
                        <Splide aria-label="My Favorite Images"  options={{
                            perPage: 6, 
                            breakpoints: {
                              768: {
                                perPage: 2, 
                              },
                            },
                          }}>
                            <SplideSlide>
                                <div className='builder-slide'>
                                    <img src={Assetz} alt="Image 1"/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                            <div className='builder-slide'>
                            <img src={Bhartiya} alt="Image 1"/>
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='builder-slide'>
                                <img src={Brigade} alt="" />                                  
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='builder-slide'>

                                <img src={Casagrand} alt="" />
                                </div>
                                </SplideSlide>

                                <SplideSlide>
                                <div className='builder-slide'>
                                <img src={Century} alt="" />
                                </div>
                              </SplideSlide>

                              <SplideSlide>
                              <div className='builder-slide'>     
                              <img src={DNR} alt="" />
                              </div>
                            </SplideSlide>

                            <SplideSlide>
                            <div className='builder-slide'>
                            <img src={Hiranandani} alt="" />
                            </div>
                          </SplideSlide>

                          <SplideSlide>
                          <div className='builder-slide'>
                          <img src={Inspira} alt="" />
                          </div>
                        </SplideSlide>

                        <SplideSlide>
                        <div className='builder-slide'>
                        <img src={Krishvi} alt="" />
                        </div>
                      </SplideSlide>

                      <SplideSlide>
                      <div className='builder-slide'>
                      <img src={Lodha} alt="" />
                      </div>
                    </SplideSlide>

                    <SplideSlide>
                    <div className='builder-slide'>
                    <img src={Godrej} alt="" />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                  <div className='builder-slide'>
                  <img src={Goyal} alt="" />
                  </div>
                </SplideSlide>

                
                <SplideSlide>
                <div className='builder-slide'>
                <img src={Mahindra} alt="" />
                </div>
              </SplideSlide>

              
              <SplideSlide>
              <div className='builder-slide'>
              <img src={Modern} alt="" />
              </div>
            </SplideSlide>


            <SplideSlide>
            <div className='builder-slide'>
            <img src={Prestige} alt="" />
            </div>
          </SplideSlide>


          <SplideSlide>
          <div className='builder-slide'>
          <img src={Provident} alt="" />
          </div>
        </SplideSlide>


        <SplideSlide>
        <div className='builder-slide'>
        <img src={RK} alt="" />
        </div>
      </SplideSlide>


      <SplideSlide>
      <div className='builder-slide'>
      <img src={Rohan} alt="" />
      </div>
    </SplideSlide>


    <SplideSlide>
    <div className='builder-slide'>
    <img src={Puravankara} alt="" />
    </div>
  </SplideSlide>


  <SplideSlide>
  <div className='builder-slide'>
  <img src={Ramky} alt="" />
  </div>
</SplideSlide>


<SplideSlide>
<div className='builder-slide'>
<img src={Sattva} alt="" />
</div>
</SplideSlide>


<SplideSlide>
<div className='builder-slide'>
<img src={Shriram} alt="" />
</div>
</SplideSlide>


<SplideSlide>
<div className='builder-slide'>
<img src={Sobha} alt="" />
</div>
</SplideSlide>

<SplideSlide>
<div className='builder-slide'>
<img src={Total} alt="" />
</div>
</SplideSlide>


                  
                        </Splide>
                        </div>

                    </div>
                    <div className="recommend">
                        <div className="rec-heading">
                            <h1><span>Clients</span> Recommend Us</h1>
                        </div>
                        <div className="rec-items">
                        <Splide
                        
                        options={{
                          perPage: 3, // Show 3 items at a time on desktop
                          breakpoints: {
                            768: {
                              perPage: 1, // Show 1 item at a time on mobile
                            },
                          },
                        }}
                      >
                        <SplideSlide>
                            <div className="rec-item">
                                <div className="rec-img">
                                    <img src={Krishvi} alt="" />
                                </div>
                                <div className="rec-text">
                                    <p>"FLY Realty has been our go-to consultant for a long time. Their team has helped us launch multiple projects in different micro-markets with end-to-end marketing and sales strategy and execution."</p>
                                    <h1>Arhanth Dinesh – Director</h1>
                                </div>
                            </div>
                            </SplideSlide>
                            <SplideSlide>
                            <div className="rec-item">
                                <div className="rec-img">
                                    <img src={RK} alt="" />
                                </div>
                                <div className="rec-text">
                                    <p>"FLY Realty helped us launch our very first large-scale plotted development project and has been successful in selling the inventory at the targeted base price in a short period of time."</p>
                                    <h1>Bharath Reddy – Director</h1>
                                </div>
                            </div>
                            </SplideSlide>
                            <SplideSlide>
                            <div className="rec-item">
                                <div className="rec-img">
                                    <img src={Sammita} alt="" />
                                </div>
                                <div className="rec-text">
                                    <p>"FLY Realty has successfully executed a mandated project with us, with a very strategic approach towards sales that was highly productive and required low intervention from my side."</p>
                                    <h1>Saketh Bala Reddy - Director</h1>
                                </div>
                            </div>
                            </SplideSlide>
                            
                            </Splide>
                        </div>
                        <Link to="/connect">CONNECT TO ACCELERATE SALES VELOCITY</Link>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}