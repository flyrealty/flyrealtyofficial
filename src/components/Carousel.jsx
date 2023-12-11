import React from 'react'
import '../assets/carousel.module.css';
import service1 from '../assets/Services1.png'
import service2 from '../assets/Services2.png'
import service3 from '../assets/Services3.png'
export default function Carousel() {
  return (
    <div class="carousel">
        <div class="slides">
            <div class="slide">
                <img src={service1} alt="Image 1" />
            </div>
            <div class="slide">
                <img src={service2} alt="Image 2" />
            </div>
            <div class="slide">
                <img src={service3} alt="Image 3" />
            </div>
        </div>
        <button class="prev">&#8249;</button>
        <button class="next">&#8250;</button>
    </div>
  )
}
