import React from 'react'
import graphImg from '../assets/graph1.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../App.css'
import shape from '../assets/Ellipse.png'

export default function Slideshow() {
  return (
    <>
      <div className="shape-eclipse">
        <img src={shape} alt="eclipse shape"/>
      </div>
      <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <div className='graphSlide'>
            <img src={graphImg} alt="Image 1"/>
            <div className="graphSummary">
              <h6>Lorem Ipsum is simply dummy text of</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className='graphSlide'>
        <div className="graphSummary">
              <h6>Lorem Ipsum is simply dummy text of</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <img src={graphImg} alt="Image 1"/>
        </div>
        </SplideSlide>
      </Splide>
    </>
  )
}
