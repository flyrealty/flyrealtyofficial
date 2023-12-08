import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../App.css'
import { Link } from 'react-router-dom'
import assetArt from '../assets/AssetArt.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../assets/style.module.css'
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
                            <i class="fa-solid fa-quote-left"></i>
                            <h1>It's All About Time, Cashflow & Average Price.</h1>
                            <h2>Higher Volume of Sales & Revenue in a short period of time, at no additional cost.*</h2>
                        </div>
                    </div>
                    <div className="optimized-section">
                        <h1>Optimized Strategy</h1>
                        <h2>End-to-end Marketing & Sales Strategy</h2>
                        <div className="opt-items">
                            <div className="opt-item">
                                <h6>360 Degree Marketing Plan (Digital & Offline)</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Lead-Centric Marketing Approach</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Inventory Management & Cost Sheet Planning</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Channel Partner Activation & Empanelment</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Referral Sales Strategy</h6>
                            </div>
                        </div>
                    </div>
                    <div className="optimized-section">
                        <h1>Optimized Processes & Metrics</h1>
                        <h2>Building the Processes & Systems</h2>
                        <div className="opt-items">
                            <div className="opt-item">
                                <h6>Better Conversion Ratios</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Lead Management Process</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Channel Partner Sales Process</h6>
                            </div>
                            <div className="opt-item">
                                <h6>Sales Closing Process</h6>
                            </div>
                            <div className="opt-item">
                                <h6>After-Sales Process</h6>
                            </div>
                        </div>
                    </div>
                    <div className="studio">
                        <h1>No Sales Without Marketing!</h1>
                        <p><span>FLY Studio</span> is a 360-Degree Real Estate Marketing Agency founded by Real Estate Professionals with strong expertise in both the departments of marketing & sales.</p>
                    </div>
                    <div className="art">
                        <div className="art-text">
                            <h1>The Science and Art of Real Estate Marketing</h1>
                            <p>We understand the Science of Real Estate Campaigns - Strategy, Lead Management and Metrics Analysis.</p>
                            <p>We know the Art of Delivering Real Estate Campaigns - Media, Design and Communications.</p>
                            <Link to="/">Know More</Link>
                        </div>
                        <div className="art-img">
                            <img src={assetArt} alt="" />
                        </div>
                    </div>
                    <div className="case-studies">
                        <div className="case-wrapper">
                            {/* <h1>Case Studies</h1> */}
                            <Splide aria-label="My Favorite Images">
                                <SplideSlide>
                                    <div className="case">
                                        <div className="case-text">
                                            <h1>Case Study 01</h1>
                                            <div className="case-points">
                                                <h4>Plotted Development in Sarjapura</h4>
                                                <h4>Need of the Hour - Launch of the Project</h4>
                                                <h4>Timeline - March 2023 to July 2023</h4>
                                            </div>
                                        </div>
                                        <div className="case-highlights">
                                            <div className="highlight-row">
                                                <div className="highlight-item">
                                                    <h1>100,000 Sft</h1>
                                                    <h6>Worth 200 Cr Inventory Sold</h6>
                                                </div>
                                                <div className="highlight-item">
                                                    <h1>200%</h1>
                                                    <h6>Marketing ROI</h6>
                                                </div>
                                                <div className="highlight-item">
                                                    <h1>5,000 Sft</h1>
                                                    <h6>Avg. Basic Price Achieved</h6>
                                                </div>
                                                <div className="highlight-item">
                                                    <h1>20+</h1>
                                                    <h6>Channel Partners Activated</h6>
                                                </div>
                                                <div className="highlight-item">
                                                    <h1>49%</h1>
                                                    <h6>Lead Qualification Ratio</h6>
                                                </div>
                                                <div className="highlight-item">
                                                    <h1>15%</h1>
                                                    <h6>Site Visit to Closure Ratio</h6>
                                                </div>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                    </div>
                    <div className="clients">
                        <div className="client-heading">
                            <h1><span>Growing</span> Happy Clientele</h1>
                        </div>
                        <div className="builders-logo">
                        <Splide aria-label="My Favorite Images">
                            <SplideSlide>
                                <div className='builder-slide'>
                                    <img src={Assetz} alt="Image 1"/>
                                    <img src={Bhartiya} alt="Image 1"/>
                                    <img src={Brigade} alt="" />
                                    <img src={Casagrand} alt="" />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                            <div className='builder-slide'>
                                    <img src={Century} alt="" />
                                    <img src={DNR} alt="" />
                                    <img src={Godrej} alt="" />
                                    <img src={Goyal} alt="" />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                            <div className='builder-slide'>
                                    <img src={Hiranandani} alt="" />
                                    <img src={Inspira} alt="" />
                                    <img src={Krishvi} alt="" />
                                    <img src={Lodha} alt="" />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                            <div className='builder-slide'>
                                    <img src={Mahindra} alt="" />
                                    <img src={Modern} alt="" />
                                    <img src={Prestige} alt="" />
                                    <img src={Provident} alt="" />
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='builder-slide'>
                                    <img src={Puravankara} alt="" />
                                    <img src={Ramky} alt="" />
                                    <img src={RK} alt="" />
                                    <img src={Rohan} alt="" />
                                </div>
                                </SplideSlide>
                                <SplideSlide>
                                <div className="builder-slide">
                                    <img src={Sattva} alt="" />
                                    <img src={Shriram} alt="" />
                                    <img src={Sobha} alt="" />
                                    <img src={Total} alt="" />
                                </div>
                            </SplideSlide>
                        </Splide>
                        </div>

                    </div>
                    <div className="recommend">
                        <div className="rec-heading">
                            <i class="fa-solid fa-star"></i>
                            <h1><span>Clients</span> Recommend Us</h1>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="rec-items">
                            <div className="rec-item">
                                <div className="rec-img">
                                    <img src={Krishvi} alt="" />
                                </div>
                                <div className="rec-text">
                                    <h1>Arhanth Dinesh – Director</h1>
                                    <p>"FLY Realty has been our go-to consultant for a long time. Their team has helped us launch multiple projects in different micro-markets with end-to-end marketing and sales strategy and execution."</p>
                                </div>
                            </div>
                            <div className="rec-item">
                                <div className="rec-img">
                                    <img src={RK} alt="" />
                                </div>
                                <div className="rec-text">
                                    <h1>Bharath Reddy – Director</h1>
                                    <p>"FLY Realty helped us launch our very first large-scale plotted development project and has been successful in selling the inventory at the targeted base price in a short period of time."</p>
                                </div>
                                
                            </div>
                            <div className="rec-item">
                                <div className="rec-img">
                                    <img src={Sammita} alt="" />
                                </div>
                                <div className="rec-text">
                                    <h1>Saketh Bala Reddy - Director</h1>
                                    <p>"FLY Realty has successfully executed a mandated project with us, with a very strategic approach towards sales that was highly productive and required low intervention from my side."</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/connect">Connect to Accelerate Sales Velocity</Link>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}
