import React from 'react'
import {Testimonials , Graphs,Nav, Header, Hero, Main, Builders, Team, Footer, Blog, Refer} from "../exports"
import '../App.css'
import Vector2 from '../assets/Vector2.png'
import quoteImg from '../assets/quoteComplete.png'
export default function Home() {
  return (
    <div className="container">
      <Nav />
      <Header/>
      <div className="bornToFly">
        <div className="born-section">
          <div className='born-img'>
            <img src={Vector2} alt="" />
          </div>
          <div className="text-content">
            <h1>Born To FLY</h1>
            <div className="born-content">
              <p>We specialize in delivering actionable Marketing and Sales Consulting Services exclusively for builders, guiding them through every step from strategic planning to seamless execution.
              Additionally, we extend our expertise to assist home-buyers in making informed decisions and wise investments in purchasing residential properties.
              </p>
              <p>As dedicated consultants, our focus is on providing valuable insights and support across the entire spectrum of the real estate industry.</p>
            </div>
          </div>
        </div>
      </div>
      <Hero />
      <Main />
      <Graphs />
      <Refer />
      <Testimonials />
      <Team />
      <div className="quote">
        <img src={quoteImg} alt="" />
      </div>
      <Footer />
    </div>
  )
}
