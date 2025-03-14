import React from 'react'
import vectorImg from "../assets/patternVector.png"
import Nav from './Nav'
import Footer from './Footer'

export default function NotFound() {
  return (
    <>
    <div className="container">
      <Nav />
        <div className='nf-wrapper'>
        <div className="vector">
              <img src={vectorImg} alt="" />
            </div>
        <div className="not-found">
          <div className="nf-title">
            <div className="heading">
           
              <h1>COMING SOON</h1>
            </div>
            <div className="subheading">
              <h4>Meanwhile feel free to interact with</h4>
              <h4>our social networks</h4>
            </div>
          </div>
        </div>
          <div className="notify">
            <input type="text" placeholder='TYPE YOUR EMAIL TO GET NOTIFIED' />
            <button>NOTIFY ME</button>
          </div>
        </div>
      <Footer />
    </div>
    </>
  )
}
