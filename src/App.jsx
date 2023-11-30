import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Projects, Services, Insights, About, Connect, Home} from './exports'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  ) 
}
