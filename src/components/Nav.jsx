import React from 'react'
import '../App.css';
import logo from '../assets/FlyLogoX.png';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarContext } from '../contexts/SidebarContext';
import { useContext } from 'react';
export default function Nav() {
  const {setIsSidebarOpen, isSidebarOpen} = useContext(SidebarContext)
  return (
    <>
      <Sidebar />
      <div className="navigation">
      <Link to="/"><img src={logo} alt="Fly Realty Logo" /></Link>
        <div className="navbar">
          <Link to={"/"}>Home</Link>
            <Link to="/business">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/about">About Us</Link>
            <Link to="/connect">Connect</Link>
        </div>
        <div className="hamburger" onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
              </div>
    </div>
    </>
    
  )
}
