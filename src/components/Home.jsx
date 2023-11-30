import React from 'react'
import {Testimonials , Graphs,Nav, Header, Hero, Main, Builders, Team, Footer, Blog, Refer} from "../exports"
import '../App.css'
export default function Home() {
  return (
    <div className="container">
      <Nav />
      <Header/>
      <Hero />
      <Main />
      <Graphs />
      <Refer />
      <Testimonials />
      <Builders />
      <Team />
      <Blog />
      <Footer />
    </div>
  )
}
