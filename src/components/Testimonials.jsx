import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import tm1 from '../assets/TesFull.png'
import tm2 from '../assets/TesFull1.png'
import tm3 from '../assets/TesFull2.png'

export default function Testimonials() {
  return (
    <div className="testimonials">
        <div className="testimonials-heading">
            <h1>Testimonials</h1>
        </div>
        <div className="tes-slider">
        <Splide>
          <SplideSlide>
            <img src={tm1} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={tm2} alt="Image 2"/>
          </SplideSlide>
          <SplideSlide>
            <img src={tm3} alt="Image 2"/>
          </SplideSlide>
        </Splide>
        </div>
    </div>
  )
}
