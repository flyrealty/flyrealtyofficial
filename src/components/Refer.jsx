import React from 'react'
import heroImg from  '../assets/refer_friend1.png'
export default function Refer() {
  return (
    <div className="refer">
        <div className="refer-text-content">
            <h1>Refer Your <span>Friends</span></h1>
            <div className="refer-heading">
                <p>Get Rewards Up to 1% of Residential Property Value for each sale.</p>
                <p>We believe in the power of connections and the value of recommendations.</p>
                <p>Introducing our Refer & Earn Program, designed to reward you for spreading the word about our genuine real estate consulting services.</p>
                <p>Reach out to our dedicated referral team for any assistance - <span>sales@flyrealty.in</span></p>
            </div>
        </div>
        <div className="refer-img-content">
            <img src={heroImg} alt="refer" />
        </div>
    </div>
  )
}
