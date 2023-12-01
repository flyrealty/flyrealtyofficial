import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Projects, Services, Insights, About, Connect, Home} from './exports';
import NotFound from './components/NotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<NotFound />} />
        <Route path="/services" element={<NotFound />} />
        <Route path="/insights" element={<NotFound />} />
        <Route path="/about" element={<NotFound />} />
        <Route path="/connect" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  ) 
}
