import React from 'react'
import '../App.css'
import jumboImg from '../assets/HeroImg.png';

export default function Header() {
  return (
    <div className="header">
      <div className="taglines">
        <h6>Real Estate Consulting Firm</h6>
        <div className="heading">
          <h1>Beyond Channel Partners,</h1>
          <h1>We're Consultants, for real.</h1>
          <div className='styleBlock'></div>
        </div>
        <div className='subheading'>
          <h4>Empowering Builders and</h4>
          <h4>Assisting Home-Buyers</h4>
        </div>
      </div>
      <div className='jumbo-img'>
        <img src={jumboImg} alt='Fly Realty'/>
      </div>
    </div>
  )
}
