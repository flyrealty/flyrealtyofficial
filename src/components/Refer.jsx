import React from 'react'
import heroImg from  '../assets/refer_friend1.png'
export default function Refer() {
  return (
    <div className="refer">
        <div className="refer-text-content">
            <h1>Spread The Word & Earn Rewards</h1>
            <div className="refer-heading">
                <div className="com-refer-heading">
                  <p>We believe in the power of connections and the value of recommendations. </p>
                  <p><span>Get Referral Bonus Upto 1%</span> of Residential Property Value for each sale.</p>
                </div>
                <p>Reach out to our dedicated referral team for any assistance - sales@flyrealty.in</p>
            </div>
        </div>
        <div className="refer-img-content">
            <img src={heroImg} alt="refer" />
        </div>
    </div>
  )
}
