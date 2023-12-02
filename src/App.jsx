import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Projects, Services, About, Connect, PrivacyPolicy, Insights, Home} from './exports';
import NotFound from './components/NotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<NotFound />} />
        <Route path="/services" element={<NotFound />} />
        <Route path="/insights" element={<NotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  ) 
}
